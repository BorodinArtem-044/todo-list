import { FC, ChangeEvent } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "@/hooks/useDispatch";
import { changeItemCompleted, deleteItem } from "@/store/sliceTaskList";
import { TaskProps } from "../Task";

export interface ViewTaskProps extends TaskProps {
  handleEdit: () => void;
}

const ViewTask: FC<ViewTaskProps> = ({ task, index, handleEdit }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem({ index }));
  };

  const handleToggleCompleted = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemCompleted({ index, value: target.checked }));
  };

  return (
    <div className="flex items-center justify-between p-4 px-3">
      <div className="flex items-center space-x-3">
        <label className="p-0">
          <span className="visuallyhidden">Выполнена задача</span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleCompleted}
            className="round rounded-none hover:cursor-pointer"
          />
        </label>

        <span
          className={` ${
            task.completed ? "line-through text-gray-500 text-lg" : "text-lg"
          } `}
        >
          {task.content}
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={handleEdit}
          aria-label="Начать редактировать описание задачи"
        >
          <CiEdit size={20} className="text-gray-500 hover:text-yellow-500" />
        </button>
        <button onClick={handleDeleteItem} aria-label="Удалить задачу">
          <AiOutlineDelete
            size={18}
            className="text-gray-500 hover:text-red-500"
          />
        </button>
      </div>
    </div>
  );
};
export default ViewTask;
