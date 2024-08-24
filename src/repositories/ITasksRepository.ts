import { Task } from "../entities/Task";
export interface IPaginatedResponse<T> {
  metadata: { totalRegisters: number };
  data: T
}

export interface ITasksRepository {
  create(text: string, userId: string): Promise<Task>;
  listByUser(userId: string, skip: number, take: number): Promise<IPaginatedResponse<Task[]>>;
  update(id: string, text?: string, done?: boolean): Promise<Task>;
  delete(id: string): Promise<void>;
}