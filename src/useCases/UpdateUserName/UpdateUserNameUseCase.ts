import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserNameUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(name: string, id: string) {
    const user = await this.usersRepository.updateName(name, id);

    return user;
  }
}