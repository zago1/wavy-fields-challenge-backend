import { prismaClient } from "../../prisma";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { UpdateUserPasswordController } from "./UpdateUserPasswordController";
import { UpdateUserPasswordUseCase } from "./UpdateUserPasswordUseCase";

const postgresUserRepository = new PostgresUserRepository(
  prismaClient
);

const updateUserPasswordUseCase = new UpdateUserPasswordUseCase(
  postgresUserRepository
);
const updateUserPasswordController = new UpdateUserPasswordController(
  updateUserPasswordUseCase
);

export { updateUserPasswordUseCase, updateUserPasswordController };