import { useState } from "react";
import { Input, Button } from "antd";
import { useAddTodoMutation } from "../../redux/todo /todo";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [addTodo] = useAddTodoMutation();

  const handleAdd = async () => {
    if (task.trim()) {
      await addTodo({ title: task, completed: false });
      setTask("");
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        className="!rounded-2xl !p-[10px] !bg-[#eddcd2] !outline-none"
        placeholder={searching ? "Search task" : "Add new task"}
        value={searching ? searchQuery : task}
        onChange={(e) => (searching ? setSearchQuery(e.target.value) : setTask(e.target.value))}
      />

      <SearchOutlined className="cursor-pointer" onClick={() => setSearching(!searching)} />

      {!searching && (
        <button className="text-white px-4 py-1" onClick={handleAdd}>
          <PlusOutlined />
        </button>
      )}
    </div>
  );
};

export default TaskInput;
