import type { ContentfulStatusCode } from "hono/utils/http-status";
import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode: ContentfulStatusCode = 404;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not found" }];
  }
}
