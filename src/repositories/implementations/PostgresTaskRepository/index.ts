import { PrismaClient } from "@prisma/client";
import { Task } from "../../../entities/Task";
import { IPaginatedResponse, ITasksRepository } from "../../ITasksRepository";

export class PostgresTaskRepository implements ITasksRepository {

  constructor(
    private dbClient: PrismaClient
  ) {}

  async create(text: string, userId: string): Promise<Task> {
    const task = await this.dbClient.task.create({
      data: {
        text,
        userId,
        done: false,
        createdAt: new Date().toISOString()
      }
    });

    return task;
  }
  listByUser(userId: string, skip: number, take: number): Promise<IPaginatedResponse<Task[]>> {
    throw new Error("Method not implemented.");
  }
  updateText(text: string, id: string): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  updateDone(done: boolean, id: string): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}