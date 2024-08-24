import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { handleError } from "../../utils";

export class CreateTaskController {
  constructor(
    private createTaskUseCase: CreateTaskUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { text, userId } = request.body;
      const task = await this.createTaskUseCase.execute(text, userId);

      return response.status(200).send(task);
    } catch (error) {
      return handleError(error, response);
    }
  }
}