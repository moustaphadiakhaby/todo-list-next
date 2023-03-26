import { NextResponse } from "next/server";
import Task from "@/models/Task";
import connectRouteToDB from "@/middlewares/connectRouteToDB";

export const POST = connectRouteToDB(async (request) => {
  const body = await request.json();

  try {
    const newTask = new Task({
      title: body.title,
    });

    await newTask.save();
    return NextResponse.json({ message: "task created" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
});
