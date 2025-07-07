import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';

export interface AuthCreatedEvent {
  routingKey: RoutingKeys.AuthCreated;
  exchangeName: Exchanges.Mail_Exchange;
  queueName: Queues.Mail_Queue;

  data: {
    receiverEmail?: string;
    template?: string;
    verifyLink?: string;
    resetLink?: string;
    username?: string;
    otp?: string;
  };
}
