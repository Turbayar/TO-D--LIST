import { useState } from "react";

export const TaskAdd = ({ addNewTask, setTasks, tasks, select, setSelect }) => {
  const [title, setTitle] = useState("");
  const onClick = () => {
    if (!title) {
      return;
    }
    addNewTask({ title: title, isDone: false, createdDate:new Date(), });
    setTitle("");
  };

  const onChange = (e) => {
    setTitle(e.target.value);
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
            className="filter-todo"
            onChange={(e) => {
              setSelect(e.target.value);
            }}
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
