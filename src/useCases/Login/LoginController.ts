import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(
    private loginUseCase: LoginUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      const user = await this.loginUseCase.execute(email, password);

      return response.status(200).send({ ...user, password: undefined });
    } catch (error) {
      console.log('[err]', error);
      return response.sendStatus(500);
    }
  }
}