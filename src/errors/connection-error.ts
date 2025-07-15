import { CustomError } from './custom-error';

export class ConnectionError extends CustomError {
  statusCode = 500;

  constructor(public message: string) {
    super(message);

    // only because we are extending a built in class
    Object.setPrototypeOf(this, ConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
