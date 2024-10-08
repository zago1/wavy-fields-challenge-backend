import { Request, Response } from "express";
import { UpdateUserPasswordUseCase } from "./UpdateUserPasswordUseCase";
import { handleError } from "../../utils";


export class UpdateUserPasswordController {
  constructor(
    private updateUserPasswordUseCase: UpdateUserPasswordUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { oldPassword, newPassword } = request.body;
      const { id } = request.params;
      
      await this.updateUserPasswordUseCase.execute(oldPassword, newPassword, id);

      return response.sendStatus(200);
    } catch (error) {
      return handleError(error, response);
    }
  }
}