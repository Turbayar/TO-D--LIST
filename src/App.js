import "./App.css";
import { useCallback, useState } from "react";
import { TaskAdd } from "./TaskAdd";
import { TaskList } from "./TaskList";
let bool = true;
function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_el, i) => index !== i);
    setTasks(newTasks);
  };

  const checkTask = (index) => {
    const newTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (index === i) {
        bool = !bool;
        if (bool) {
          tasks[i].checked = "completed";
        } else {
          tasks[i].checked = "not";
        }
      }

      newTasks.push(tasks[i]);
    }

    setTasks(newTasks);

    //  tasks[i].checked = "completed"
  };

  return (
    <div>
      <TaskAdd addNewTask={addNewTask} setTasks={setTasks} tasks={tasks} />
      <TaskList tasks={tasks} removeTask={removeTask} checkTask={checkTask} />
    </div>
  );
}

export default App;
