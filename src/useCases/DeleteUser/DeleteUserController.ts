import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


export class DeleteUserController {
  constructor(
    private deleteUserUseCase: DeleteUserUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      
      await this.deleteUserUseCase.execute(id);

      return response.sendStatus(200);
    } catch (error) {
      return response.sendStatus(500);
    }
  }
}