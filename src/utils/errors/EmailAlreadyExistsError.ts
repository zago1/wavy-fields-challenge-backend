import { BaseError } from "./BaseError";

const EMAIL_ALREADY_EXISTS_ERROR = 'EMAIL_ALREADY_EXISTS_ERROR';
const STATUS_CODE = 409;

export class EmailAlreadyExistsError extends BaseError {
  constructor() {
    super(EMAIL_ALREADY_EXISTS_ERROR, STATUS_CODE);
  }
}