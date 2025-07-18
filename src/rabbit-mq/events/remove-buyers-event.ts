import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface RemoveBuyersEvent {
  routingKey: RoutingKeys.RemoveBuyers;
  exchangeName: Exchanges.Remove_Buyers_Exchange;
  queueName: Queues.Remove_Buyers_Queue;

  data: null;
}
