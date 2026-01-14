import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask, updateTask } from "../redux/taskSlice/taskSlice";

const TaskForm = ({ editableTask = null, onClose }) => {
  const dispatch = useDispatch();
  const {tasks, loading, error } = useSelector(state => state.tasks);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending", // pending / completed
  });

  // If editing, populate form
  useEffect(() => {
    if (editableTask) {
      setFormData({
        title: editableTask.title,
        description: editableTask.description,
        status: editableTask.status,
      });
    }
  }, [editableTask]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableTask) {
      dispatch(updateTask({ id: editableTask._id, updates: formData }));
      onClose(); 
    } else {
      dispatch(createTask(formData));
      setFormData({ title: "", description: "", status: "pending" });
    }
  };


// for deleting all the tasks
//   const handleDeleteAll = () => {
//   const confirm = window.confirm(
//     "Are you sure you want to delete all tasks?"
//   );
//   if (confirm) {
//     dispatch(deleteAllTasks());
//   }
// };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow mb-4 w-[50%]"
    >
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      {/* <div className="flex gap-7"> */}
        <button
        type="submit"
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded font-semibold transition"
      >
        {editableTask ? "Update Task" : loading ? "Adding..." : "Add Task"}
  

      </button>
            {/* {tasks && <button  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold transition" onClick={handleDeleteAll}>Delete All Tasks</button>}</div> */}
      {editableTask && (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;
