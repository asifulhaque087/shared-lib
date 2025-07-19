import { type Channel, type ConsumeMessage } from 'amqplib';
import type { Exchanges } from './exchanges';

// Simplified Event interface for a fanout listener
interface FanoutEvent {
  exchangeName: Exchanges;
  queues: any;
  data: any;
}

export abstract class FanoutListener<T extends FanoutEvent> {
  abstract exchangeName: T['exchangeName'];

  abstract queueName: T['queues'];

  abstract onMessage(data: T['data'], message: ConsumeMessage | null): void;

  protected channel: Channel;

  constructor(channel: Channel) {
    this.channel = channel;
  }

  async createExchange() {
    await this.channel.assertExchange(this.exchangeName, 'fanout', {
      durable: false,
    });
  }

  async createQueue() {
    await this.channel.assertQueue(this.queueName, {
      exclusive: false, // Only accessible by this connection
      durable: false, // Deleted when connection closes
      autoDelete: true, // Deleted when last consumer unbinds (redundant with exclusive, but good practice)
    });
  }

  async bindQueue() {
    await this.channel.bindQueue(this.queueName, this.exchangeName, '');
  }

  async listen() {
    await this.createExchange();
    await this.createQueue();
    await this.bindQueue();

    this.channel.consume(this.queueName, (message) => {
      if (message === null) return;

      console.log(`[Listener] Message received on queue: ${this.queueName}`);

      const parsedData = this.parseMessage(message);
      this.onMessage(parsedData, message);
    });
  }

  parseMessage(msg: ConsumeMessage) {
    const data = msg.content;

    return typeof data === 'string'
      ? JSON.parse(data)
      : JSON.parse(data.toString('utf8'));
  }
}
