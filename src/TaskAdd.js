import { useState } from "react";

export const TaskAdd = ({ addNewTask, setTasks, tasks }) => {
  const [title, setTitle] = useState("");
  const [select, setSelect] = useState("");
  const onClick = () => {
    if (!title) {
      return;
    }
    addNewTask({ title: title, });
    setTitle("");
  };

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const changeSelect = (e) => {
    setSelect(e.target.value);
    let newArray = tasks;

    if (e.target.value === "completed") {
  
    } else if (e.target.value === "uncompleted") {

    }
    setTasks(newArray);
  };
  return (
    <div>
      <header>
        <h1>Tito's Todo List</h1>
      </header>
      <form action="#">
        <input
          type="text"
          className="todo-input"
          onChange={onChange}
          value={title}
        />
        <button className="todo-button" type="submit" onClick={onClick}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            value={select}
            onChange={changeSelect}
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};
