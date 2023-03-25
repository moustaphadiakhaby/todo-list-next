import { NextResponse } from "next/server";
import Task from "@/models/Task";
import connectDB from "@/middlewares/connectDB";

export async function GET(request) {
  return NextResponse.json("Hello, Next.js!");
}

export async function POST(request) {
  const body = await request.json();

  try {
    await connectDB();
    const newTask = new Task({
      title: body.title,
    });

    await newTask.save();
    return NextResponse.json({ message: "task created" });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(request) {
  return NextResponse.json("Hello, Next.js!");
}
