import EmptyTodoList from "./components/EmptyTodoList";
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { FC } from "react";
import { useSelector } from "react-redux";
import { state } from "./store/sliceTaskList";

const App: FC = () => {
  const { taskList } = useSelector(state);

  return (
    <div className="bg-gray-100 min-h-screen md:min-h-[700px] w-full m-auto flex flex-col items-center transition-all duration-500">
      <div className="flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4 text-black">
        <h1 className="uppercase text-4xl font-bold text-gray-500 tracking-widest mb-4 md:text-3xl">
          Задачи
        </h1>

        <div className="shadow-md">
          <AddTaskForm />
        </div>

        <div className="scroll bg-white w-full min-h-[400px] md:min-h-[500px] px-2 overflow-y-auto rounded-md shadow-lg transition-all duration-500">
          {taskList.length ? (
            <TaskList taskList={taskList} />
          ) : (
            <EmptyTodoList />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
