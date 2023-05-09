import { Module } from '@nestjs/common';
import { DateController } from './date.controller';
import { DateService } from './date.service';
import { MongooseModule } from '@nestjs/mongoose';
// 引入日期数据表的格式
import { dateSchema } from './date.schema';
 
// 连接数据库
// const DBRootModule = MongooseModule.forRoot('mongodb://127.0.0.1:27017/time_stats');
 
const DateTable = MongooseModule.forFeature([{ name: 'Dates', schema: dateSchema }]);

@Module({
  imports: [DateTable],
  controllers: [DateController],
  providers: [DateService],
})
export class DateModule {}
