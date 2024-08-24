import { prismaClient } from "../../prisma";
import { PostgresTaskRepository } from "../../repositories/implementations/PostgresTaskRepository";
import { DeleteTaskController } from "./DeleteTaskController";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

const postgresTaskRepository = new PostgresTaskRepository(
  prismaClient
);

const deleteTaskUseCase = new DeleteTaskUseCase(
  postgresTaskRepository
);
const deleteTaskController = new DeleteTaskController(
  deleteTaskUseCase
);

export { deleteTaskUseCase, deleteTaskController };