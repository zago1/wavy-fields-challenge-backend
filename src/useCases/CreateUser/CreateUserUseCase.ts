import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(name: string, email: string, password: string) {
    const user = await this.usersRepository.create(name, email, password);

    return user;
  }
}