import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { BaseError } from "../../utils/errors/BaseError";
import { handleError } from "../../utils";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;
      const user = await this.createUserUseCase.execute(name, email, password);

      return response.status(200).send(user);
    } catch (error) {
      return handleError(error, response);
    }
  }
}