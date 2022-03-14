export const TaskDetail = ({ title, onDelete, onCheck, addclass }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          <div className="todo">
            <li className={("todo-item ", addclass ? addclass : "")}>
              {title}
            </li>
            <button className="complete-btn" onClick={onCheck}>
              <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
