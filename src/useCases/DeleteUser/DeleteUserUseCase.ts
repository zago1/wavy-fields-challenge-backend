import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string) {
    await this.usersRepository.delete(id);
  }
}