import { useState } from "react";
import { Button, Input } from "antd";
// import { useGetTodosQuery, useDeleteTodoMutation, useToggleTodoMutation } from "../../redux/todo/todo";
import { useGetTodosQuery,useAddTodoMutation,useDeleteTodoMutation,useToggleTodoMutation } from "../../redux/todo /todo";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Edit from "../edit";

const TaskList = () => {
  const { data: todos = [], isLoading, isError } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [searchQuery, setSearchQuery] = useState("");
  const [edited, setEdited] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching todos.</p>;

  // Filter tasks based on search input
  const filteredTasks = todos.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-4">
      {/* Search Input */}
      <Input
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />

      {/* Task List */}
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center border rounded-2xl border-[#9d6b53] p-2 my-2"
        >
          <span
            className={`cursor-pointer ${
              task.completed ? "line-through text-[#a98467]" : "text-[#432818]"
            }`}
            onClick={() => toggleTodo({ id: task.id, completed: !task.completed })}
          >
            {task.title}
          </span>
          <div className="flex gap-2">
            <Button
              className="!text-[#9d6b53]"
              onClick={() => toggleTodo({ id: task.id, completed: !task.completed })}
            >
              {task.completed ? "Done" : "Active"}
            </Button>
            <Button icon={<EditOutlined className="!text-[#9d6b53]" />} onClick={() => setEdited(task)} />
            <Button
              icon={<DeleteOutlined className="!text-[#9d6b53]" />}
              onClick={() => deleteTodo({ id: task.id })}
            />
          </div>
        </div>
      ))}

    
      {edited && <Edit task={edited} close={() => setEdited(null)} />}
    </div>
  );
};

export default TaskList;
