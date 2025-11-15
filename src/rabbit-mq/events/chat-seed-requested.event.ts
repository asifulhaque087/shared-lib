import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface ChatSeedRequested {
  routingKey: RoutingKeys.ChatSeedRequested;
  exchangeName: Exchanges.ChatSeedRequested;
  queueName: Queues.ChatSeedRequested;
  data: {
    gigs: {
      id: string;
      username: string;
      title: string;
      basicTitle: string;
      description: string;
      basicDescription: string;
      coverImage: string;
      expectedDelivery: string;
    }[];
    buyers: {
      id: string;
      profilePicture: string;
      username: string;
      isSeller: boolean;
      email: string;
      country?: string;
    }[];
  };
}
