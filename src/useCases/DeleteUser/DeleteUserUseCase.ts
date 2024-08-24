import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.delete(id);

    return user;
  }
}