import { Request, Response } from "express";
import { ListTasksByUserUseCase } from "./ListTasksByUserUseCase";
import { handleError } from "../../utils";

export class ListTasksByUserController {
  constructor(
    private listTasksByUserUseCase: ListTasksByUserUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const page = request.query.page 
        ? parseInt(request.query.page as string)
        : 1;

      const pageSize = request.query.pageSize 
        ? parseInt(request.query.pageSize as string)
        : 20;


      const data = await this.listTasksByUserUseCase.execute(userId, page, pageSize);

      return response.status(200).send(data);
    } catch (error) {
      return handleError(error, response);
    }
  }
}