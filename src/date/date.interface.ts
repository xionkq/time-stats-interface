import { Document } from 'mongoose';
 
export interface Date extends Document {
  readonly user_name: string;
  readonly project_name: string;
  readonly date: number;
  readonly duration: number;
  readonly message: string;
}