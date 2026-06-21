import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User, UserSchema } from './users/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://akthersoni10_db_user:akther100@cluster0-shard-00-00.noypcmq.mongodb.net:27017,cluster0-shard-00-01.noypcmq.mongodb.net:27017,cluster0-shard-00-02.noypcmq.mongodb.net:27017/nestdb?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority',
    ),

    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}