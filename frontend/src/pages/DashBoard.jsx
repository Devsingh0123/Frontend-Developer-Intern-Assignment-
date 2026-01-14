import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTasks, getAllTasks } from "../redux/taskSlice/taskSlice";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import SearchBar from "../components/Searchbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);
  const [searchItem, setSearchItem] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(searchItem.toLowerCase());

      const matchStatus =
        filterStatus === "all"
          ? true
          : filterStatus === "completed"
          ? task.completed
          : !task.completed;

      return matchSearch && matchStatus;
    });
  }, [tasks, searchItem, filterStatus]);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  // for deleting all the tasks
  const handleDeleteAll = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    if (confirm) {
      dispatch(deleteAllTasks());
      toast.success(" All Tasks deleted 🗑️");
    }
  };

  return (
    <div className=" h-screen flex flex-col ">
      <Navbar />
      <div className="flex-1 overflow-y-auto flex justify-center  ">
        {/* Main content */}
        <main className="w-1/2  ">
          <div className="flex justify-between mt-2">
            <span className="text-2xl font-bold m-1 block sm:hidden">Tasks</span>
  <span className="text-2xl font-bold mb-4 hidden sm:block">Your Tasks</span>
         

            {/* delete all tasks button */}

            {tasks && (
              <button
                className="bg-red-500 rounded-lg hover:bg-red-600 cursor-pointer text-white "
                onClick={handleDeleteAll}
              >
                <span className=" m-1 block sm:hidden">Delete All</span>
  <span className=" m-1 hidden sm:block">Delete All Tasks</span>
                
              </button>
            )}
          </div>
          {/* Search + Filter */}
          <div
            className="flex flex-col gap-3 mt-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <SearchBar value={searchItem} onChange={setSearchItem} />

            <div className="flex gap-1">
              {["all", "pending", "completed"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1 text-sm rounded-full border capitalizetransition ${filterStatus === status? "bg-blue-400  border-blue-500": "bg-white text-gray-700 hover:bg-gray-400"}`}>
                  {status}
                </button>
              ))}
            </div>
          </div>

          <TaskForm />
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-4 mt-4 ">
              {filteredTasks.length === 0 ? (
                <div className="mt-20 text-center text-gray-500">
                  <h2 className="text-xl font-semibold">No tasks found 😕</h2>
                  <p>Add your first task to get started</p>
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <TaskCard key={task._id} task={task} />
                ))
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
