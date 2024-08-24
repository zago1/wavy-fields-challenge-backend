import { prismaClient } from "../../prisma";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { UpdateUserNameController } from "./UpdateUserNameController";
import { UpdateUserNameUseCase } from "./UpdateUserNameUseCase";

const postgresUserRepository = new PostgresUserRepository(
  prismaClient
);

const updateUserNameUseCase = new UpdateUserNameUseCase(
  postgresUserRepository
);
const updateUserNameController = new UpdateUserNameController(
  updateUserNameUseCase
);

export { updateUserNameUseCase, updateUserNameController };