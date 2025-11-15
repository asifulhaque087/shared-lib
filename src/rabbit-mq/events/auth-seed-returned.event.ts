import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface AuthSeedReturned {
  routingKey: RoutingKeys.AuthSeedReturned;
  exchangeName: Exchanges.AuthSeedReturned;
  queueName: Queues.AuthSeedReturned;
  data: {
    authUsers: {
      id: string;
      username: string;
      email: string;
      profilePublicId: string;
      profilePicture: string;
      country?: string;
    }[];
  };
}
