import { Exchanges } from '../exchanges';
export type BuyerReceivedReviewQueues =
  | 'buyer-received-review-queue-user'
  | 'buyer-received-review-queue-order';
export interface Buyer_Received_Review_Event {
  exchangeName: Exchanges.Buyer_Received_Review;
  queues: BuyerReceivedReviewQueues;
  data: {
    gigId: string;
    gigImage: string;
    gigTitle: string;
    orderId: string;
    buyerId: string;
    sellerId: string;
    senderId: string;
    senderUsername: string;
    senderImage: string;
    senderCountry: string | null;
    receiverId: string;
    ratings: number;
    comment: string | null;
    reivewGivenAt: Date;
  };
}
