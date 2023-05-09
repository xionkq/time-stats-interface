import { Schema } from 'mongoose';
 
export const dateSchema = new Schema({
  _id: { type: String, required: true },
  user_name: { type: String, required: true },
  date: { type: String, required: true },
  duration: { type: String, required: true },
  message: { type: String, required: true },
});