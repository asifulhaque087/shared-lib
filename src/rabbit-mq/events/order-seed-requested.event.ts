import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface OrderSeedRequested {
  routingKey: RoutingKeys.OrderSeedRequested;
  exchangeName: Exchanges.OrderSeedRequested;
  queueName: Queues.OrderSeedRequested;
  data: {
    gigs: {
      id: string;
      title: string;
      basicTitle: string;
      description: string;
      basicDescription: string;
      coverImage: string;
      expectedDelivery: string;
    }[];
    messages: {
      id: string;
      gigId: string;
      senderUsername: string;
      receiverUsername: string;
      hasOffer: boolean;
      offerAccepted: boolean;
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
