import { ITasksRepository } from "../../repositories/ITasksRepository";

export class UpdateTaskUseCase {
  constructor(
    private taskRepository: ITasksRepository
  ) {}

  async execute(id: string, text?: string, done?: boolean) {
    const user = await this.taskRepository.update(id, text, done);

    return user;
  }
}