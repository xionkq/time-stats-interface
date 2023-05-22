// 新建用户
export class CreateDateDTO {
  readonly user_name: string;
  readonly project_name: string;
  readonly date: number;
  readonly duration: number;
  readonly message: string;
}