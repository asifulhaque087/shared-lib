import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface AuthSeedRequested {
  routingKey: RoutingKeys.AuthSeedRequested;
  exchangeName: Exchanges.AuthSeedRequested;
  queueName: Queues.AuthSeedRequested;
  data: {
    count?: number;
  };
}
