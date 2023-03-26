"use client";

import axios from "axios";

import { useRouter } from "next/navigation";

const Todo = ({ task }) => {
  const router = useRouter();
  const handleCheck = async () => {
    try {
      await axios.put("http://localhost:3000/api/tasks/" + task._id, {
        id: task._id,
      });
      router.refresh();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/api/tasks/" + task._id
      );

      console.log(task._id);

      router.refresh();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex gap-6">
      <input type="checkbox" checked={task.isDone} onChange={handleCheck} />
      <p>{task.title}</p>
      <p className="cursor-pointer" onClick={handleDelete}>
        X
      </p>
    </div>
  );
};

export default Todo;
