import { prismaClient } from "../../prisma";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const postgresUserRepository = new PostgresUserRepository(
  prismaClient
);

const deleteUserUseCase = new DeleteUserUseCase(
  postgresUserRepository
);
const deleteUserController = new DeleteUserController(
  deleteUserUseCase
);

export { deleteUserUseCase, deleteUserController };