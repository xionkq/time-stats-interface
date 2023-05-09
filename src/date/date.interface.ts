import { Document } from 'mongoose';
 
export interface Date extends Document {
  readonly _id: string;
  readonly user_name: string;
  readonly date: string;
  readonly duration: string;
  readonly message: string;
}