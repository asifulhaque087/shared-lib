import { type Channel } from 'amqplib';
import { Exchanges } from './exchanges';

interface FanoutEvent {
  exchangeName: Exchanges;
  data: any;
}

export abstract class Publisher<T extends FanoutEvent> {
  abstract exchangeName: T['exchangeName'];

  private channel: Channel;

  constructor(channel: Channel) {
    this.channel = channel;
  }

  async createExchange() {
    await this.channel.assertExchange(this.exchangeName, 'fanout', {
      durable: false, // Or true, depending on whether you want the exchange to survive broker restarts
    });
  }

  publish(data: T['data']) {
    this.channel.publish(
      this.exchangeName,
      '', // Routing key is ignored for fanout, conventionally an empty string
      Buffer.from(JSON.stringify(data))
    );
  }
}
