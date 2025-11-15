import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface GigSeedRequested {
  routingKey: RoutingKeys.GigSeedRequested;
  exchangeName: Exchanges.GigSeedRequested;
  queueName: Queues.GigSeedRequested;
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
