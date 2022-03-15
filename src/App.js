import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { TaskAdd } from "./TaskAdd";
import { TaskList } from "./TaskList";

import { db } from "./firebase.js";

let bool = true;
function App() {
  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    db.collection("hello").orderBy("createdDate", "desc").onSnapshot((snapshot) => {
      const myList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setAllTasks(myList);
      setTasks(myList);
    });
  }, []);

  useEffect(() => {
    if (select === "completed") {
      const filtered = allTasks.filter((cur) => cur.isDone);
      setTasks(filtered);
    } else if (select === "uncompleted") {
      const uncompletedFilter = allTasks.filter((cur) => !cur.isDone);
      setTasks(uncompletedFilter);
    } else {
      setTasks(allTasks)
    }
  }, [select]);

  const addNewTask = (newTask) => {
    db.collection("hello").add(newTask);
    // setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    // const newTasks = tasks.filter((_el, i) => index !== i);
    db.collection("hello").doc(index).delete();
    // setTasks(newTasks);
  };

  const checkTask = (id, isDone) => {
    db.collection("hello").doc(id).update({ isDone: !isDone });

    // const newTasks = [];

    // for (let i = 0; i < tasks.length; i++) {
    //   if (index === i) {
    //     if (bool) {
    //       tasks[i].checked = "completed";
    //       bool = !bool;
    //     } else {
    //       tasks[i].checked = "not";
    //       bool = !bool;
    //     }
    //   }

    //   newTasks.push(tasks[i]);
    // }

    // setTasks(newTasks);

    //  tasks[index].checked = "completed"
  };

  const filterTask = () => {};

  return (
    <div>
      <TaskAdd
        select={select}
        setSelect={setSelect}
        addNewTask={addNewTask}
        setTasks={setTasks}
        tasks={tasks}
      />
      <TaskList tasks={tasks} removeTask={removeTask} checkTask={checkTask} />
    </div>
  );
}

export default App;
