import { Request, Response } from "express";
import { UpdateUserNameUseCase } from "./UpdateUserNameUseCase";

export class UpdateUserNameController {
  constructor(
    private updateUserNameUseCase: UpdateUserNameUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { name } = request.body;
      const { id } = request.params;

      const user = await this.updateUserNameUseCase.execute(name, id);

      return response.status(200).send(user);
    } catch (error) {
      return response.sendStatus(500);
    }
  }
}