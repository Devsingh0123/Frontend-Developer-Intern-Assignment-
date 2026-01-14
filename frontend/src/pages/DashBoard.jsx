import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../redux/taskSlice/taskSlice";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

 

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className=" flex-1 p-6 overflow-auto bg-gray-50 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
          <TaskForm />
          
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col w-[50%] gap-4 mt-4">
             { tasks.length === 0 ? (
              <div className="mt-20 text-center text-gray-500">
                <h2 className="text-xl font-semibold">No tasks found 😕</h2>
                <p>Add your first task to get started</p>
              </div>
              ) : (
              tasks.map((task) => (
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
