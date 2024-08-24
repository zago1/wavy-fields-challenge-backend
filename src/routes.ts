import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { updateUserNameController } from "./useCases/UpdateUserName";
import { updateUserPasswordController } from "./useCases/UpdateUserPassword";
import { loginController } from "./useCases/Login";
import { createTaskController } from "./useCases/CreateTask";

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).send("OK");
});

router.post('/login', (request: Request, response: Response) => {
  return loginController.handle(request, response);
});

router.post('/user', (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

router.delete('/user/:id', (request: Request, response: Response) => {
  return deleteUserController.handle(request, response);
});

router.patch('/user/name/:id', (request: Request, response: Response) => {
  return updateUserNameController.handle(request, response);
});

router.patch('/user/password/:id', (request: Request, response: Response) => {
  return updateUserPasswordController.handle(request, response);
});

router.post('/task', (request: Request, response: Response) => {
  return createTaskController.handle(request, response);
});


export { router };
