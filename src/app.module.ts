import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DateModule } from './date/date.module';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
 
// 连接数据库
const DBRootModule = MongooseModule.forRoot('mongodb://127.0.0.1:27017/time_stats');

@Module({
  imports: [DBRootModule, DateModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
