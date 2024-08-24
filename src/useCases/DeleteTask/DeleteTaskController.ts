import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
  constructor(
    private deleteTaskUseCase: DeleteTaskUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await this.deleteTaskUseCase.execute(id);

      return response.sendStatus(200);
    } catch (error) {
      return response.sendStatus(500);
    }
  }
}