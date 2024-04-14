import { useDispatch } from "@/hooks/useDispatch";
import { FC } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { addNewItem } from "@/store/sliceTaskList";
import useOnSubmitOneInput from "@/hooks/useOnSubmitOneInput";


const AddTaskForm: FC = () => {
  const dispatch = useDispatch();

  const addNewItemHandle = (value: string) => {
    dispatch(addNewItem({ value }));
  };

  const { inputRef, onSubmit } = useOnSubmitOneInput(addNewItemHandle);

  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white w-full  flex space-x-2 items-center text-gray-500 focus-within:text-gray-700  rounded-lg px-4">
        <label className="bg-white w-full  flex space-x-2 items-center">
          <span className="visuallyhidden">Добавить новую задачу</span>
          <CiCirclePlus
            size={28}
            className="px-0 hover:cursor-pointer"
            fill="currentColor"
          />
          <input
            ref={inputRef}
            className="bg-transparent w-full h-fit p-1 py-4 text-lg focus:outline-none"
            name="new-task"
            type="text"
            placeholder="Добавить новую задачу..."
          />
        </label>
        <button className="px-4 uppercase text-gray-500" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
