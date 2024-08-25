import { ITasksRepository } from "../../repositories/ITasksRepository";

export class DeleteTaskUseCase {
  constructor(
    private taskRepository: ITasksRepository
  ) {}

  async execute(id: string) {
    await this.taskRepository.delete(id);
  }
}