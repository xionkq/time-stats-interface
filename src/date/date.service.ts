/**
 * 新建 provider
 * @dependence nest g service user server
 */
import { Injectable } from '@nestjs/common';
 
// 为了在 user.service 中操作数据库
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
 
// 引入数据类型
import { CreateDateDTO } from './date.dto';
import { Date } from './date.interface';
 
@Injectable()
export class DateService {
  // 构造函数，让 date.service 在实例化时，能够接收到数据库 Model，进而操作数据库
  constructor(@InjectModel('Dates') private readonly dateModel: Model<Date>) {}
 
  /**
   * mongoose 操作数据库是异步的，所以使用 async/await
   */
 
  // 查找单个用户
  async findOne(uesr_name: string): Promise<Date[] | null> {
    return await this.dateModel.find({user_name:uesr_name});
  }
 
  // 添加单个用户
  async addOne(body: CreateDateDTO): Promise<void> {
    await this.dateModel.create(body);
  }
}