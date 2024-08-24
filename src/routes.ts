import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).send("OK");
});

router.post('/user', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

router.delete('/user/:id', (request: Request, response: Response) => {
  return deleteUserController.handle(request, response);
});


export { router };
