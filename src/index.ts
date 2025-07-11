// This is the file where every things get exported

// ** Middlewares
export * from './middlewares/error-handler';
export * from './middlewares/verify-gateway-token';
export * from './middlewares/verify-client-token';

// ** Errors
export * from './errors/custom-error';
export * from './errors/request-validation-error';
export * from './errors/database-connection-error';
export * from './errors/not-found-error';
export * from './errors/not-authorized-error';
export * from './errors/bad-request.error';

// ** Event Bus
export * from './rabbit-mq/base-listener';
export * from './rabbit-mq/base-publisher';
export * from './rabbit-mq/routing-keys';
export * from './rabbit-mq/exchanges';
export * from './rabbit-mq/queues';
export * from './rabbit-mq/events/send-email-event';

// ** Cloudinary
export * from './cloudinary-upload';

// ** Old Types
export {
  IAuthPayload,
  IAuthDocument,
  IAuthBuyerMessageDetails,
  IEmailMessageDetails,
  IAuth,
  ISignUpPayload,
  ISignInPayload,
  IForgotPassword,
  IResetPassword,
  IReduxAuthPayload,
  IReduxAddAuthUser,
  IReduxLogout,
  IAuthResponse,
  IAuthUser,
} from './auth.interface';
export { IBuyerDocument, IReduxBuyer } from './buyer.interface';
export {
  IConversationDocument,
  IMessageDocument,
  IMessageDetails,
  IChatBoxProps,
  IChatSellerProps,
  IChatBuyerProps,
  IChatMessageProps,
} from './chat.interface';
export {
  GigType,
  ICreateGig,
  ISellerGig,
  IGigContext,
  IGigsProps,
  IGigCardItems,
  ISelectedBudget,
  IGigViewReviewsProps,
  IGigInfo,
  IGigTopProps,
} from './gig.interface';
export {
  IOrderNotifcation,
  IOffer,
  IExtendedDelivery,
  IDeliveredWork,
  IOrderEvents,
  IOrderReview,
  IOrderMessage,
  IOrderDocument,
} from './order.interface';
export {
  IReviewMessageDetails,
  IRatingTypes,
  IRatingCategories,
  IRatingCategoryItem,
  IReviewDocument,
} from './review.interface';
export {
  ISearchResult,
  IHitsTotal,
  IQueryList,
  IQueryString,
  ITerm,
  IPaginateProps,
} from './search.interface';
export {
  SellerType,
  ILanguage,
  IExperience,
  IEducation,
  ICertificate,
  ISellerDocument,
} from './seller.interface';
export { IEmailLocals } from './email.interface';
// export {
//   IErrorResponse,
//   IError,
//   CustomError,
//   BadRequestError,
//   NotFoundError,
//   NotAuthorizedError,
//   FileTooLargeError,
//   ServerError,
//   ErrnoException,
// } from './error-handler';
export { verifyGatewayRequest } from './gateway-middleware';
export {
  firstLetterUppercase,
  lowerCase,
  toUpperCase,
  isEmail,
  isDataURL,
} from './helpers';
