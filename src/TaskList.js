import { TaskDetail } from "./TaskDetail";

export const TaskList = ({
  tasks,
  removeTask,
  checkTask,
  addclass,
  isDone,
}) => {
  return (
    <div>
      {tasks.map(({ title, id, isDone }, i) => (
        <TaskDetail
          title={title}
          key={i}
          onDelete={() => removeTask(id)}
          onCheck={() => checkTask(id, isDone)}
          done={isDone}
        />
      ))}
    </div>
  );
};
