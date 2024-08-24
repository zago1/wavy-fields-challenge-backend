import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

interface ListTasksByUserUseCaseResponse {
  metadata: {
    page: number;
    rows: number;
    totalRegisters: number;
  },
  data: Task[];
}


export class ListTasksByUserUseCase {
  constructor(
    private taskRepository: ITasksRepository
  ) {}

  async execute(
    userId: string,
    page: number,
    pageSize: number
  ): Promise<ListTasksByUserUseCaseResponse> {
    const skip = (page - 1) * pageSize;

    const { data, metadata } = await this.taskRepository.listByUser(userId, skip, pageSize);

    return {
      metadata: {
        ...metadata,
        page,
        rows: data.length
      },
      data
    };
  }
}