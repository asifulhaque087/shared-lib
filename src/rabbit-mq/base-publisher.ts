// import amqp from "amqplib";

import { type Channel } from 'amqplib';
import { RoutingKeys } from './routing-keys';
import { Exchanges } from './exchanges';

// const connection = await connect("amqp://localhost");
// const channel = await connection.createChannel();

interface Event {
  routingKey: RoutingKeys;
  exchangeName: Exchanges;
  data: any;
}

export abstract class Publisher<T extends Event> {
  abstract exchangeName: T['exchangeName'];
  abstract routingKey: T['routingKey'];

  private channel: Channel;

  constructor(channel: Channel) {
    this.channel = channel;
  }

  async createExchange() {
    await this.channel.assertExchange(this.exchangeName, 'direct', {
      durable: false,
    });
  }

  publish(data: T['data']) {
    this.channel.publish(
      this.exchangeName,
      this.routingKey,
      Buffer.from(JSON.stringify(data))
    );
  }
}
