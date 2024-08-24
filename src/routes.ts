import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { updateUserNameController } from "./useCases/UpdateUserName";
import { updateUserPasswordController } from "./useCases/UpdateUserPassword";
import { loginController } from "./useCases/Login";
import { createTaskController } from "./useCases/CreateTask";
import { deleteTaskController } from "./useCases/DeleteTask";
import { listTasksByUserController } from "./useCases/ListTasksByUser";

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).send("OK");
});

// user routes

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

// task routes

router.post('/task', (request: Request, response: Response) => {
  return createTaskController.handle(request, response);
});

router.delete('/task/:id', (request: Request, response: Response) => {
  return deleteTaskController.handle(request, response);
});

router.get('/task/list/:userId', (request: Request, response: Response) => {
  return listTasksByUserController.handle(request, response);
});



export { router };
