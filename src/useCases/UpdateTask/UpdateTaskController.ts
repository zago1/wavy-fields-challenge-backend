import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

export class UpdateTaskController {
  constructor(
    private updateTaskUseCase: UpdateTaskUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { text, done } = request.body;
      const task = await this.updateTaskUseCase.execute(id, text, done);

      return response.status(200).send(task);
    } catch (error) {
      return response.sendStatus(500);
    }
  }
}