import { IUsersRepository } from "../../repositories/IUsersRepository";

export class LoginUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(email: string, password: string) {
    const user = await this.usersRepository.login(email, password);

    return user;
  }
}