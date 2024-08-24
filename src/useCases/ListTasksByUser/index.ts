import { prismaClient } from "../../prisma";
import { PostgresTaskRepository } from "../../repositories/implementations/PostgresTaskRepository";
import { ListTasksByUserController } from "./ListTasksByUserController";
import { ListTasksByUserUseCase } from "./ListTasksByUserUseCase";

const postgresTaskRepository = new PostgresTaskRepository(
  prismaClient
);

const listTasksByUserUseCase = new ListTasksByUserUseCase(
  postgresTaskRepository
);
const listTasksByUserController = new ListTasksByUserController(
  listTasksByUserUseCase
);

export { listTasksByUserUseCase, listTasksByUserController };