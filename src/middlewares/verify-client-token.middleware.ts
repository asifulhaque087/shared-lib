import jwt from 'jsonwebtoken';
import type { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

// Define the shape of your JWT payload
type ClientJWTPayload = {
  id: number | undefined;
  email: string;
  username: string;
  exp: number;
};

// Extend Request to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: ClientJWTPayload;
    }
  }
}

export const verifyClientToken = (secret: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
      throw new NotAuthorizedError();
    }

    try {
      const [bearer, jwtToken] = authHeader.split(' ');

      if (bearer !== 'Bearer' || !jwtToken) {
        throw new NotAuthorizedError();
      }

      // Verify token using the passed secret
      const payload = jwt.verify(jwtToken, secret) as ClientJWTPayload;

      req.user = payload;
      next();
    } catch (error) {
      throw new NotAuthorizedError();
    }
  };
};
