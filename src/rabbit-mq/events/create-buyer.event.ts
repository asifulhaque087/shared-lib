import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface CreateBuyerEvent {
  routingKey: RoutingKeys.CreateBuyer;
  exchangeName: Exchanges.Create_Buyers_Exchange;
  queueName: Queues.Create_Buyers_Queue;

  data: {
    id: string;
    username: string;
    email: string;
    profilePublicId: string;
    profilePicture?: string;
    country?: string;
  };
}
