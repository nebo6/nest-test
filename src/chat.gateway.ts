import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server

  //   handleMessage(client, data): void {}
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log(message)
    this.server.emit('message', message)
  }
}
