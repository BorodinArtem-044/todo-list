import Task from "./Task/Task";
import { FC } from "react";
import { ItemTask } from "../../store/sliceTaskList";

interface TaskListProps {
  taskList: ItemTask[];
}

const TaskList: FC<TaskListProps> = ({ taskList }) => (
  <ul>
    {taskList.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ))}
  </ul>
);
export default TaskList;
