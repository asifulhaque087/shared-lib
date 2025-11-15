import { Exchanges } from '../exchanges';
export type ReviewSeededQueues =
  | 'review-seeded-user-queue'
  | 'review-seeded-gig-queue'
  | 'review-seeded-order-queue';
export interface ReviewSeeded {
  exchangeName: Exchanges.ReviewSeeded;
  queues: ReviewSeededQueues;
  data: {
    reviews: {
      id: string;
      gigId: string;
      comment?: string;
      ratings: number;
      buyerId: string;
      buyerIsSender: boolean;
      sellerId: string;
    }[];
  };
}
