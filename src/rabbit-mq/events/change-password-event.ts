import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface ChangePasswordEvent {
  routingKey: RoutingKeys.ChangePassword;
  exchangeName: Exchanges.Mail_Exchange;
  queueName: Queues.Mail_Queue;

  data: {
    username: string;
    template: string;
    receiverEmail: string;
  };
}
