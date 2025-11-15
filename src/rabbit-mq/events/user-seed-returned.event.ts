import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface UserSeedReturned {
  routingKey: RoutingKeys.UserSeedReturned;
  exchangeName: Exchanges.UserSeedReturned;
  queueName: Queues.UserSeedReturned;
  data: {
    buyers: {
      id: string;
      profilePicture: string;
      username: string;
      isSeller: boolean;
      email: string;
      country?: string;
    }[];
  };
}
