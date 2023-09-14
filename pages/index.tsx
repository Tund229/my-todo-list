import { getAllTodos } from "@/api";
import AddTask from "@/components/AddTask";
import Meta from "@/components/Meta";
import { TodoList } from "@/components/TodoList";
import { ITask } from "@/types/tasks";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const fetchTasks = async () => {
    const tasksData = await getAllTodos();
    setTasks(tasksData);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  console

  return (
    <>
      <Meta
        title="Liste des Tâches"
        description="Consultez votre liste de tâches et gérez-les efficacement."
      />
      <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo list App</h1>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </main>
    </>
  );
}
