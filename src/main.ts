import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })
  app.useGlobalPipes(new ValidationPipe())
  // app.enableCors({ origin: ['http://127.0.0.1:5500'] })
  await app.listen(3000)
}
bootstrap()
