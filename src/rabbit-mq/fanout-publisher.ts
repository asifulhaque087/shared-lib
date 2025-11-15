import { type Channel } from 'amqplib';
import { Exchanges } from './exchanges';
interface FanoutEvent {
    exchangeName: Exchanges;
    data: any;
}
export declare abstract class FanoutPublisher<T extends FanoutEvent> {
    abstract exchangeName: T['exchangeName'];
    private channel;
    constructor(channel: Channel);
    createExchange(): Promise<void>;
    publish(data: T['data']): void;
}
export {};
