import { ITasksRepository } from "../../repositories/ITasksRepository";

export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITasksRepository
  ) {}

  async execute(text: string, userId: string) {
    const task = await this.taskRepository.create(text, userId);

    return task;
  }
}