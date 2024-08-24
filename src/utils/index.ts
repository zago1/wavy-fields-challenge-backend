import { Response } from "express";
import { BaseError } from "./errors/BaseError";

export function handleError(error: any | unknown, response: Response) {
  if (error instanceof BaseError) {
    return response.status(error.statusCode).send(error.message);
  }

  return response.sendStatus(500);
}