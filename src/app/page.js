import Toolbar from "@/components/Toolbar";
import Task from "@/models/Task";
import connectPageToDB from "@/middlewares/connectPageToDB";
import Todo from "@/components/Todo";

export const dynamic = "force-dynamic";

const fetchData = async () => {
  try {
    await connectPageToDB();

    const data = await Task.find();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default async function Home() {
  const data = await fetchData();

  return (
    <main className="mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center bg-gray-300 text-xl">
      {data.map((elem) => {
        return <Todo key={elem._id} task={JSON.parse(JSON.stringify(elem))} />;
      })}
      <Toolbar />
    </main>
  );
}
