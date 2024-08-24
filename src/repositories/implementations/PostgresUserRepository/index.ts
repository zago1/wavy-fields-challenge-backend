import { PrismaClient } from "@prisma/client";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../IUsersRepository";
import { EmailAlreadyExistsError } from "../../../utils/errors/EmailAlreadyExistsError";
import { UserNotFoundError } from "../../../utils/errors/UserNotFoundError";
import { InvalidPasswordError } from "../../../utils/errors/InvalidPasswordError";

export class PostgresUserRepository implements IUsersRepository {

  constructor(
    private dbClient: PrismaClient
  ) {}

  private async checkUserEmail(email): Promise<boolean> {
    const user = await this.dbClient.user.findFirst({
      where: {
        email
      }
    });

    return !!user;
  }

  private async checkUserPassword(password: string, id: string): Promise<boolean> {
    const user = await this.dbClient.user.findFirst({
      where: {
        id,
        password
      }
    });

    return !!user;
  }

  private createNewUser(id: string, name: string, email: string) {
    return new User({
      email,
      name,
      password: undefined 
    }, id);
  }

  async create(name: string, email: string, password: string): Promise<User> {
    if (await this.checkUserEmail(email)) {
      throw new EmailAlreadyExistsError();
    }

    const user = await this.dbClient.user.create({
      data: {
        email,
        name,
        password
      }
    });

    return this.createNewUser(user.id, user.name, user.email);

  }
  async login(email: string, password: string): Promise<User> {
    const user = await this.dbClient.user.findFirst({
      where: {
        email,
        password
      }
    });

    if (!user) {
      throw new UserNotFoundError();
    }

    return this.createNewUser(user.id, user.name, user.email);
  }

  async updateName(name: string, id: string): Promise<User> {
    const user = await this.dbClient.user.update({
      data: { name },
      where: { id }
    });

    return this.createNewUser(user.id, user.name, user.email);
  }

  async updatePassword(oldPassword: string, newPassword: string, id: string): Promise<void> {

    if (!(await this.checkUserPassword(oldPassword, id))) {
      throw new InvalidPasswordError();
    }

    await this.dbClient.user.update({
      data: { password: newPassword },
      where: { id }
    });
  }

  async delete(id: string): Promise<void> {
    await this.dbClient.user.delete({ where: { id } });
  }
  
}