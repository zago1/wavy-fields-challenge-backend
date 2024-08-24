import { ITasksRepository } from "../../repositories/ITasksRepository";

export class DeleteTaskUseCase {
  constructor(
    private taskRepository: ITasksRepository
  ) {}

  async execute(id: string) {
    const user = await this.taskRepository.delete(id);

    return user;
  }
}