import React from "react";
import ProgressBar from "./components/progressbar";
import TaskInput from "./components/taskInput";
import TaskList from "./components/taskList";

function App() {
  return (
    <>
      <div className="p-4 max-w-lg mx-auto border-2 border-[#e6ccb2]  mt-[40px] bg-[#e6ccb2] rounded-4xl ">
        <ProgressBar />
        <TaskInput />
        <TaskList/>
      </div>
    </>
  );
}

export default App;
