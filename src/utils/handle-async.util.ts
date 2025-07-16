import { ConnectionError } from '../errors/connection-error';

export const handleAsync = async <T>(
  promise: Promise<T>,
  errMsg: string = 'Database Connection Error'
): Promise<T> => {
  try {
    const result = await promise; // Await the passed promise
    return result;
  } catch (error: unknown) {
    throw new ConnectionError(errMsg);
  }
};
