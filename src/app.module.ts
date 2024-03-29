import { Module } from '@nestjs/common'

import { ConfigModule } from './config.module'
import { UserModule } from '@entities/user/user.module'
import { TypeOrmModule } from '@db/typeorm.module'
import { ChatGateway } from './chat.gateway'

@Module({
  imports: [ConfigModule, TypeOrmModule, UserModule],
  providers: [ChatGateway],
})
export class AppModule {}
