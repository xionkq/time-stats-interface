/**
 * 新建 controller
 * @dependence nest g controller user server
 */
import {
    Controller,
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateDateDTO } from './date.dto';
  import { Date } from './date.interface';
  import { DateService } from './date.service';
   
  interface DateResponse<T = unknown> {
    code: number;
    data?: T;
    message: string;
  }
   
  @Controller('date')
  export class DateController {
    // 实例化 provider
    constructor(private readonly dateService: DateService) {}
   
    // GET /date/:user_name
    @Get(':user_name')
    async findOne(@Param('user_name') user_name: string): Promise<DateResponse<Date>> {
      return {
        code: 200,
        data: await this.dateService.findOne(user_name) || undefined,
        message: 'Success.',
      };
    }
   
    // POST /date
    @Post()
    async addOne(@Body() body: CreateDateDTO): Promise<DateResponse> {
      await this.dateService.addOne(body);
      return {
        code: 200,
        message: 'Success.',
      };
    }
  }