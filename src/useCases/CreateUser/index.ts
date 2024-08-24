import { prismaClient } from "../../prisma";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserRepository = new PostgresUserRepository(
  prismaClient
);

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository
);
const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };