import "./App.css";
import { useState } from "react";
import { TaskAdd } from "./TaskAdd";
import { TaskList } from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {P
    const newTasks = tasks.filter((_el, i) => index !== i )
    setTasks(newTasks)
}

  return (
    <div>
      <TaskAdd addNewTask = {addNewTask} />
      <TaskList tasks = {tasks} removeTask = {removeTask}/>
    </div>
  );
}

export default App;
