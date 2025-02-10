import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Doctor's Appointment",
      description: "Doctor's appointment at 10:30am on Monday",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Meeting at School",
      description: "Parent teacher meeting at school at 1:30pm on Tuesday",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Food Shopping",
      description: "Buy groceries at 5:00pm on Wednesday",
      isCompleted: false,
    },
  ]);

  return (
    <div className="e-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
