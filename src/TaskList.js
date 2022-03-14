import { TaskDetail } from "./TaskDetail";

export const TaskList = ({ tasks, removeTask, checkTask, addclass }) => {

  return (
    <div>
      {tasks.map(({ title, checked, id }, i) => (
        <TaskDetail
          title={title}
          key={i}
          onDelete={() => removeTask(id)}
          onCheck={() => checkTask(i)}
          addclass={checked}
        />
      ))}
    </div>
  );
};
