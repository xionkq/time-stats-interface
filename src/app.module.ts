import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { DateModule } from './date/date.module';
import { DateService } from './date/date.service';
import { DateController } from './date/date.controller';
import { MongooseModule } from '@nestjs/mongoose';
 
// 连接数据库
const DBRootModule = MongooseModule.forRoot('mongodb://127.0.0.1:27017/time_stats');

// 引入用户数据表的格式
import { userSchema } from './user.schema';
 
const UserTable = MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]);

@Module({
  imports: [DBRootModule, DateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
