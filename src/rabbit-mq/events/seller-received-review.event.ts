import { Exchanges } from '../exchanges';
export type SellerReceivedReviewQueues =
  | 'seller-received-review-queue-user'
  | 'seller-received-review-queue-gig'
  | 'seller-received-review-queue-order';
export interface Seller_Received_Review_Event {
  exchangeName: Exchanges.Seller_Received_Review;
  queues: SellerReceivedReviewQueues;
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
