import { Schema, model, models } from "mongoose";

const task = new Schema({
  title: String,
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Task = models.Task || model("Task", task);

export default Task;
