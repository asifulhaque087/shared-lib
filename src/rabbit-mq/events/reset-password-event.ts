import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface ResetPasswordEvent {
  routingKey: RoutingKeys.ResetPassword;
  exchangeName: Exchanges.Mail_Exchange;
  queueName: Queues.Mail_Queue;

  data: {
    receiverEmail: string;
    resetLink: string;
    username: string;
    template: string;
  };
}
