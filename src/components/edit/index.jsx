import { Modal, Input } from "antd";
import { useUpdateTodoMutation } from "../../redux/todo /todo";
import { useState } from "react";

const Edit = ({ task, close }) => {
  const [newTask, setNewTask] = useState(task.text);
  const [updateTodo] = useUpdateTodoMutation();

  const handleSave = async () => {
    if (newTask.trim() !== "") {
      await updateTodo({ id: task.id, title: newTask });
    }
    close();
  };

  return (
    <Modal open onCancel={close} footer={null} className="custom-modal">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <Input
          className="!rounded-lg !p-2 !bg-[#eddcd2] !outline-none border border-gray-300 shadow-sm"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-[#e6ccb2] text-white px-4 py-2 rounded hover:bg-[#655a4f]"
            onClick={close}
          >
            Cancel
          </button>
          <button
            className="bg-[#e6ccb2] text-white px-4 py-2 rounded hover:bg-[#655a4f]"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Edit;
