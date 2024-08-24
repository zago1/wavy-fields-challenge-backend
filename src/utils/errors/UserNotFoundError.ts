import { BaseError } from "./BaseError";

const USER_NOT_FOUND_ERROR = 'USER_NOT_FOUND_ERROR';
const STATUS_CODE = 404;

export class UserNotFoundError extends BaseError {

  constructor() {
    super(USER_NOT_FOUND_ERROR, STATUS_CODE);
  }
}