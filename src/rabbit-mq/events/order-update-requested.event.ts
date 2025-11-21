import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
type OrderStatus = 'incomplete' | 'progress' | 'complete';

export interface OrderUpdateRequested {
  routingKey: RoutingKeys.OrderUpdateRequested;
  exchangeName: Exchanges.OrderUpdateRequested;
  queueName: Queues.OrderUpdateRequested;
  data: {
    orders: {
      id: string;
      sellerId: string;
      status: OrderStatus;
      price : number;
      buyerId: string;
    }[];
  };
}
