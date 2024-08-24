import { PrismaClient } from "@prisma/client";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../IUsersRepository";

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

  private createNewUser(name: string, email: string, password: string, id?: string) {
    return new User({ email, name, password }, id);
  }

  async create(name: string, email: string, password: string): Promise<User> {
    if (await this.checkUserEmail(email)) {
      throw new Error("Email already exists");
    }

    const user = await this.dbClient.user.create({
      data: {
        email,
        name,
        password
      }
    });

    return this.createNewUser(user.name, user.email, '', user.id);

  }
  async login(email: string, password: string): Promise<User> {
    const user = await this.dbClient.user.findFirst({
      where: {
        email,
        password
      }
    });

    if (!user) {
      throw new Error("User doesn't exist!");
    }

    return this.createNewUser(user.name, user.email, '', user.id);
  }

  async updateName(name: string, id: string): Promise<User> {
    const user = await this.dbClient.user.update({
      data: { name },
      where: { id }
    });

    return this.createNewUser(user.name, user.email, '', user.id);
  }

  async updatePassword(oldPassword: string, newPassword: string, id: string): Promise<void> {

    if (!(await this.checkUserPassword(oldPassword, id))) {
      throw new Error("Invalid password!");
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