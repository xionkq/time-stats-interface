import { Schema } from 'mongoose';
 
export const projectSchema = new Schema({
  user_name: { type: String, required: true },
  project_name: { type: String, required: true },
});