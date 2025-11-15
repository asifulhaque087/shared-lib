import { Exchanges } from '../exchanges';
import { Queues } from '../queues';
import { RoutingKeys } from '../routing-keys';
export interface OrderSeedReturned {
  routingKey: RoutingKeys.OrderSeedReturned;
  exchangeName: Exchanges.OrderSeedReturned;
  queueName: Queues.OrderSeedReturned;
  data: {
    orders: {
      id: string;
      gigId: string;
      gigImage: string;
      gigTitle: string;
      buyerId: string;
      buyerUsername: string;
      buyerProfilePicture: string;
      buyerCountry?: string;
      sellerId: string;
      sellerUsername: string;
      sellerProfilePicture: string;
      sellerCountry?: string;
    }[];
  };
}
