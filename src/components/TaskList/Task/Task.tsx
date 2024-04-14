import { ItemTask } from "@/store/sliceTaskList";
import EditTask from "./components/EditTask";
import ViewTask from "./components/ViewTask";
import { useState, FC } from "react";


export interface TaskProps {
  task: ItemTask;
  index: number;
}

const Task: FC<TaskProps> = ({ task, index }) => {
  const [editing, setEditing] = useState(false);
  const handleEdit = () => setEditing(!editing);

  return (
    <li className="mb-1 border-b border-gray-300 space-y-2">
      {editing ? (
        <EditTask task={task} index={index} handleEdit={handleEdit} />
      ) : (
        <ViewTask task={task} index={index} handleEdit={handleEdit} />
      )}
    </li>
  );
};

export default Task;
