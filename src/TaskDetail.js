export const TaskDetail = ({ title, onDelete }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          <div className="todo">
            <li className="todo-item"> {title} </li>
            {/* <button className="complete-btn">
              <i className="fas fa-check"></i>
            </button> */}
            <button className="trash-btn" onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
