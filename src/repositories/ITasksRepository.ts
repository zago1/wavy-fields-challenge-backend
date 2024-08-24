import { Task } from "../entities/Task";

interface IPaginatedResponse<T> {
  metadata: { totalRegisters: number };
  data: T
}

export interface ITasksRepository {
  create(text: string, userId: string): Promise<Task>;
  listByUser(userId: string): Promise<IPaginatedResponse<Task[]>>;
  updateText(text: string, id: string): Promise<Task>;
  updateDone(done: boolean, id: string): Promise<Task>;
}