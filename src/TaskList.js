import { TaskDetail } from "./TaskDetail"

export const `TaskList = ({ tasks, removeTask }) => {
    return (
        <div>
        {
            tasks.map(({ title }, i) => (
                <TaskDetail title={ title } key={ i } onDelete={ () => removeTask(i) } />
            ))
        }
        </div>
    )
}