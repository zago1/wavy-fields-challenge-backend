import { prismaClient } from "../../prisma";
import { PostgresTaskRepository } from "../../repositories/implementations/PostgresTaskRepository";
import { UpdateTaskController } from "./UpdateTaskController";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

const postgresTaskRepository = new PostgresTaskRepository(
  prismaClient
);

const updateTaskUseCase = new UpdateTaskUseCase(
  postgresTaskRepository
);
const updateTaskController = new UpdateTaskController(
  updateTaskUseCase
);

export { updateTaskUseCase, updateTaskController };