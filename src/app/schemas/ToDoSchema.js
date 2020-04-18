import { Schema, model } from 'mongoose';

/**
 * Todo mongo database schema's definition
 */
const ToDoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default model('ToDo', ToDoSchema);
