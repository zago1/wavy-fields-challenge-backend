import { BaseError } from "./BaseError";

const INVALID_PASSWORD_ERROR = 'INVALID_PASSWORD_ERROR';
const STATUS_CODE = 401;

export class InvalidPasswordError extends BaseError {
  constructor() {
    super(INVALID_PASSWORD_ERROR, STATUS_CODE);
  }
}