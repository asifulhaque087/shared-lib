import type { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { RequestValidationError } from '../errors/request-validation-error';

export const validateData = (schema: z.ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        throw new RequestValidationError(error.issues);
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
};
