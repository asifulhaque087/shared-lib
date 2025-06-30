import type { Channel, ConsumeMessage } from "amqplib";
import { Listener } from "./base-listener";
import type { BuyerCreatedEvent } from "./buyer-created-event";
import { Exchanges } from "./exchanges";
import { Queues } from "./queues";
import { RoutingKeys } from "./routing-keys";

export class BuyerCreatedListener extends Listener<BuyerCreatedEvent> {
  exchangeName: Exchanges.Mail_Exchange = Exchanges.Mail_Exchange;
  queueName: Queues.Mail_Queue = Queues.Mail_Queue;
  routingKey: RoutingKeys.BuyerCreated = RoutingKeys.BuyerCreated;

  onMessage(data: any, message: ConsumeMessage) {
    console.log("event data is ", data);

    this.channel.ack(message);
  }
}
