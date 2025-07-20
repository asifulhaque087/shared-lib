import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface ReceiveSellersEvent {
  routingKey: RoutingKeys.ReceiveSellers;
  exchangeName: Exchanges.Receive_Sellers;
  queueName: Queues.Receive_Sellers;

  data: {
    sellers: {
      id: number;
      email: string;
      username: string;
      profilePicture: string | null;
    }[];

    count: number;
  };
}
