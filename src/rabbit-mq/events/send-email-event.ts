import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface SendEmailEvent {
  routingKey: RoutingKeys.SendEmail;
  exchangeName: Exchanges.Mail_Exchange;
  queueName: Queues.Mail_Queue;

  data: {
    username: string;
    template: string;
    receiverEmail: string;
    verifyLink?: string;
    resetLink?: string;
    otp?: string;
  };
}
