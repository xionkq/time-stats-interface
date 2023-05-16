import { Schema } from 'mongoose';
 
export const dateSchema = new Schema({
  user_name: { type: String, required: true },
  project_id: { type: Number, required: true },
  date: { type: Number, required: true },
  duration: { type: Number, required: true },
  message: { type: String, required: true },
});