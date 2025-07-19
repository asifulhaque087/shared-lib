import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface GetSellersEvent {
  routingKey: RoutingKeys.GetSellers;
  exchangeName: Exchanges.Get_Sellers;
  queueName: Queues.Get_Sellers;

  data: {
    count: number;
  };
}
