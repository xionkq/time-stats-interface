import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
// 引入日期数据表的格式
import { projectSchema } from './project.schema';

 
const ProjectsTable = MongooseModule.forFeature([{ name: 'Projects', schema: projectSchema }]);

@Module({
  imports: [ProjectsTable],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
