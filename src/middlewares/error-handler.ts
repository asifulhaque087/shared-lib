import type { Context } from "hono";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (err: Error, c: Context) => {
  if (err instanceof CustomError) {
    return c.json({ errors: err.serializeErrors() }, err.statusCode);
  }

  console.log(err.message);

  return c.json({ errors: [{ message: "something went wrong" }] }, 400);
};
