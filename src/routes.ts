import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).send("OK");
});

router.post('/user', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});


export { router };
