import { TaskDetail } from "./TaskDetail";

export const TaskList = ({ tasks, removeTask, checkTask, addclass }) => {
  console.log(addclass);
  console.log(tasks);

  return (
    <div>
      {tasks.map(({ title, checked }, i) => (
        <TaskDetail
          title={title}
          key={i}
          onDelete={() => removeTask(i)}
          onCheck={() => checkTask(i)}
          addclass={checked}
        />
      ))}
    </div>
  );
};
