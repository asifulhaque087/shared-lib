import { createMiddleware } from 'hono/factory';
import { verify } from 'hono/jwt';
import { NotAuthorizedError } from '../errors/not-authorized-error';

type Payload = {
  id: number | undefined;
  email: string;
  username: string;
  exp: number;
};

export const verifyClientToken = (secret: string) =>
  createMiddleware<{
    Variables: {
      // publicAxios: AxiosService;
      user: Payload;
    };
  }>(async (c, next) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) throw new NotAuthorizedError();

    try {
      // Check token
      const [bearer, jwtToken] = authHeader.split(' ');

      if (bearer !== 'Bearer' || !jwtToken) throw new NotAuthorizedError();

      // verify token
      const payload: Payload = (await verify(jwtToken, secret)) as Payload;

      c.set('user', payload);
    } catch (error) {
      throw new NotAuthorizedError();
    }

    await next();
  });
