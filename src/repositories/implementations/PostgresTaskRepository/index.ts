import { PrismaClient } from "@prisma/client";
import { Task } from "../../../entities/Task";
import { IPaginatedResponse, ITasksRepository } from "../../ITasksRepository";

export class PostgresTaskRepository implements ITasksRepository {

  constructor(
    private dbClient: PrismaClient
  ) {}

  private async checkTaskById(id: string): Promise<boolean> {
    const task = await this.dbClient.task.findFirst({ where: { id } });

    return !!task;
  }

  private async countAllTasksByUser(userId: string): Promise<number> {
    const count = await this.dbClient.task.count({ where: { userId } });

    return count;
  }

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

  async listByUser(userId: string, skip: number, take: number): Promise<IPaginatedResponse<Task[]>> {
    const tasks = await this.dbClient.task.findMany({
      where: { userId },
      skip,
      take,
      orderBy: {
        createdAt: 'asc'
      }
    });

    const totalRegisters = await this.countAllTasksByUser(userId);

    return {
      metadata: { totalRegisters },
      data: tasks,
    }
  }

  async update(id: string, text?: string, done?: boolean): Promise<Task> {
    const task = await this.dbClient.task.update({
      data: { text, done },
      where: { id }
    });

    return task;
  }

  async delete(id: string): Promise<void> {
    if (!( await this.checkTaskById(id) )) { return; }

    await this.dbClient.task.delete({ where: { id } });
  }
  
}