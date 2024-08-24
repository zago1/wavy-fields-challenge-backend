import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

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
      return response.sendStatus(500);
    }
  }
}