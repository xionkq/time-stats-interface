import { Document } from 'mongoose';
 
export interface Project extends Document {
  readonly user_name: string;
  readonly project_name: string;
}