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
  import { CreateProjectDTO } from './project.dto';
  import { Project } from './project.interface';
  import { ProjectService } from './project.service';
   
  interface ProjectResponse<T = unknown> {
    code: number;
    data?: T;
    message: string;
  }
   
  @Controller('project')
  export class ProjectController {
    // 实例化 provider
    constructor(private readonly projectService: ProjectService) {}
   
    // GET /project/:user_name
    @Get(':user_name')
    async findOne(@Param('user_name') user_name: string): Promise<ProjectResponse<Project[]>> {
      return {
        code: 200,
        data: await this.projectService.findOne(user_name) || undefined,
        message: 'Success.',
      };
    }
   
    // POST /project
    @Post()
    async addOne(@Body() body: CreateProjectDTO): Promise<ProjectResponse> {
      await this.projectService.addOne(body);
      return {
        code: 200,
        message: 'Success.',
      };
    }
  }