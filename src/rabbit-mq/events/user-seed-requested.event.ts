import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface UserSeedRequested {
  routingKey: RoutingKeys.UserSeedRequested;
  exchangeName: Exchanges.UserSeedRequested;
  queueName: Queues.UserSeedRequested;
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
