/**
 * 新建 provider
 * @dependence nest g service user server
 */
import { Injectable } from '@nestjs/common';
 
// 为了在 user.service 中操作数据库
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
 
// 引入数据类型
import { CreateProjectDTO } from './project.dto';
import { Project } from './project.interface';
 
@Injectable()
export class ProjectService {
  // 构造函数，让 project.service 在实例化时，能够接收到数据库 Model，进而操作数据库
  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) {}
 
  /**
   * mongoose 操作数据库是异步的，所以使用 async/await
   */
 
  // 查找单个用户
  async findOne(uesr_name: string): Promise<Project[] | null> {
    return await this.projectModel.find({user_name:uesr_name});
  }
 
  // 添加单个用户
  async addOne(body: CreateProjectDTO): Promise<void> {
    await this.projectModel.create(body);
  }
}