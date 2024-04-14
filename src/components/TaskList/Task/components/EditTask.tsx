import { FC, useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { ViewTaskProps } from "./ViewTask";
import { useDispatch } from "@/hooks/useDispatch";
import { editItem } from "@/store/sliceTaskList";
import useOnSubmitOneInput from "@/hooks/useOnSubmitOneInput";

interface EditTaskProps extends ViewTaskProps {}

const EditTask: FC<EditTaskProps> = ({ task, index, handleEdit }) => {
  const dispatch = useDispatch();

  const editItemHandle = (value: string) => {
    dispatch(editItem({ value, index }));
    handleEdit();
  };

  const { inputRef, onSubmit } = useOnSubmitOneInput(editItemHandle);

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-between p-1 px-3 w-full"
    >
      <label className="flex items-center space-x-3 w-full">
        <span className="visuallyhidden">Редактировать задачу</span>
        <input
          ref={inputRef}
          type="text"
          defaultValue={task.content}
          className="w-full bg-transparent py-3 text-lg focus:outline-none"
        />
      </label>
      <div className="flex space-x-3">
        <button type="submit" aria-label="Подтвердить изменения">
          <MdOutlineDone
            size={20}
            className="hover:text-green-400 text-gray-500"
          />
        </button>
        <button
          type="button"
          onClick={handleEdit}
          aria-label="Отменить редактирование задачи"
        >
          <RxCross2 size={20} className="text-gray-500 hover:text-orange-400" />
        </button>
      </div>
    </form>
  );
};
export default EditTask;
