import type { BuyerCreatedEvent } from "./buyer-created-event";
import { Exchanges } from "./exchanges";
import { RoutingKeys } from "./routing-keys";
import { Publisher } from "./base-publisher";

export class BuyerCreatedPublisher extends Publisher<BuyerCreatedEvent> {
  exchangeName: Exchanges.Mail_Exchange = Exchanges.Mail_Exchange;
  routingKey: RoutingKeys.BuyerCreated = RoutingKeys.BuyerCreated;
//   routingKey: RoutingKeys.BuyerUpdated= RoutingKeys.BuyerUpdated;
}
