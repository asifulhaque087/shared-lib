import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface GigCountUpdateRequested {
  routingKey: RoutingKeys.GigCountUpdateRequested;
  exchangeName: Exchanges.GigCountUpdateRequested;
  queueName: Queues.GigCountUpdateRequested;
  data: {
    gigs: {
      id: string;
      title: string;
      sellerId: string;
    }[];
  };
}
