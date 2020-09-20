import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MessageModule } from './messages/message.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://admin:pass@localhost/temptemp'
    ),
    MessageModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
