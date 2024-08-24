import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return response.status(200).send("OK");
});


export { router };
