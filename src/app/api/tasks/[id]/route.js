import { NextResponse } from "next/server";
import Task from "@/models/Task";
import connectRouteToDB from "@/middlewares/connectRouteToDB";

export const PUT = connectRouteToDB(async (request, { params }) => {
  try {
    const thisTask = await Task.findById(params.id);

    thisTask.isDone = !thisTask.isDone;

    await thisTask.save();
    return NextResponse.json({ message: "task updated" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
});

export const DELETE = connectRouteToDB(async (request, { params }) => {
  try {
    const thisTask = await Task.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "task deleted" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
});
