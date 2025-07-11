import { createMiddleware } from 'hono/factory';
import { verify } from 'hono/jwt';
import { NotAuthorizedError } from '../errors/not-authorized-error';

type Payload = {
  serviceName: string;
};

export const verifyGatewayToken = (secret: string, serviceName: string) =>
  createMiddleware(async (c, next) => {
    const gatewayToken = c.req.header('gatewayToken');
    if (!gatewayToken) throw new NotAuthorizedError();

    try {
      // verify token
      const payload: Payload = (await verify(gatewayToken, secret)) as Payload;

      if (payload.serviceName !== serviceName) throw new NotAuthorizedError();
    } catch (error) {
      throw new NotAuthorizedError();
    }

    await next();
  });
