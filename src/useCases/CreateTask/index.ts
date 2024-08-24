import { prismaClient } from "../../prisma";
import { PostgresTaskRepository } from "../../repositories/implementations/PostgresTaskRepository";

import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const postgresTaskRepository = new PostgresTaskRepository(
  prismaClient
);

const createTaskUseCase = new CreateTaskUseCase(
  postgresTaskRepository
);
const createTaskController = new CreateTaskController(
  createTaskUseCase
);

export { createTaskUseCase, createTaskController };