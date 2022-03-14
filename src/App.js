import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { TaskAdd } from "./TaskAdd";
import { TaskList } from "./TaskList";

import { db } from "./firebase.js";

let bool = true;
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    db.collection("hello").onSnapshot((snapshot) => {
      const myList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTasks(myList);
    }); 
  }, []);

  const addNewTask = (newTask) => {
    db.collection("hello").add(
     newTask,
    );
    // setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    // const newTasks = tasks.filter((_el, i) => index !== i);
    db.collection("hello").doc(index).delete();
    // setTasks(newTasks);
  };

  const checkTask = (index) => {
    const newTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (index === i) {
        if (bool) {
          tasks[i].checked = "completed";
          bool = !bool;
        } else {
          tasks[i].checked = "not";
          bool = !bool;
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
