// import amqp from "amqplib";

import { type Channel, type ConsumeMessage } from 'amqplib';
import { RoutingKeys } from './routing-keys';
import type { Exchanges } from './exchanges';
import type { Queues } from './queues';

// const connection = await connect("amqp://localhost");
// const channel = await connection.createChannel();

interface Event {
  routingKey: RoutingKeys;
  exchangeName: Exchanges;
  queueName: Queues;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract exchangeName: T['exchangeName'];
  abstract queueName: T['queueName'];
  abstract routingKey: T['routingKey'];
  abstract onMessage(data: T['data'], message: ConsumeMessage | null): void;

  // private channel: Channel;
  protected channel: Channel;

  constructor(channel: Channel) {
    this.channel = channel;
  }

  async createExchange() {
    await this.channel.assertExchange(this.exchangeName, 'direct', {
      durable: false,
    });
  }

  async createQueue() {
    await this.channel.assertQueue(this.queueName, {
      durable: false,
    });
  }

  async bindQueue() {
    await this.channel.bindQueue(
      this.queueName,
      this.exchangeName,
      this.routingKey
    );
  }

  async listen() {
    await this.createExchange();
    await this.createQueue();
    await this.bindQueue();

    this.channel.consume(this.queueName, (message) => {
      if (message === null) return;

      console.log(`Message receive: ${this.exchangeName} / ${this.routingKey}`);

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
