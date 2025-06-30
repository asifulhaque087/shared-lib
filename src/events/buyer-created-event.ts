import type { Exchanges } from "./exchanges";
import type { Queues } from "./queues";
import { RoutingKeys } from "./routing-keys";

export interface BuyerCreatedEvent {
  routingKey: RoutingKeys.BuyerCreated;
  exchangeName: Exchanges.Mail_Exchange;
  queueName: Queues.Mail_Queue;

  data: {
    id: string;
    title: string;
    price: string;
  };
}
