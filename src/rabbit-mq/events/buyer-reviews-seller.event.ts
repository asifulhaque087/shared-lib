import { Exchanges } from '../exchanges';

type Q = 'buyer-review-queue' | 'order-review-queue';

export interface Buyer_Review_Seller_Event {
  exchangeName: Exchanges.Buyer_Reviews_Seller;
  queues: Q;

  // Todo : jobber-review holo kaj bazare use houa fanout event or exchange name
  // Todo : ata samne aro fix kora lagbe I think

  data: {
    gigId?: string;
    reviewerId?: string;
    sellerId?: string;
    review?: string;
    rating?: number;
    orderId?: string;
    createdAt?: string;
  };
}

// export class BuyerReviewAddedListener extends FanoutListener<BuyerReviewAddedEvent> {
//   exchangeName: Exchanges.Buyer_Review_Added = Exchanges.Buyer_Review_Added;
//   queueName: Q = 'buyer-review-queue';

//   async onMessage(data: CreateBuyerEvent['data'], message: ConsumeMessage) {
//     this.channel.ack(message);
//   }
// }
