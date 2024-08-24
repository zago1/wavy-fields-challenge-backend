import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserPasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(oldPassword: string, newPassword: string, id: string) {
    const user = await this.usersRepository.updatePassword(oldPassword, newPassword, id);

    return user;
  }
}