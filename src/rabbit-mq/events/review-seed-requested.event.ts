import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface ReviewSeedRequested {
  routingKey: RoutingKeys.ReviewSeedRequested;
  exchangeName: Exchanges.ReviewSeedRequested;
  queueName: Queues.ReviewSeedRequested;
  data: {
    orders: {
      id: string;
      gigId: string;
      gigImage: string;
      gigTitle: string;
      buyerId: string;
      buyerUsername: string;
      buyerProfilePicture: string;
      buyerCountry: string;
      sellerId: string;
      sellerUsername: string;
      sellerProfilePicture: string;
      sellerCountry: string;
    }[];
  };
}
