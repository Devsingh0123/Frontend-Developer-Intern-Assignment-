import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <div className="flex h-screen overflow-hidden">

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-6">My Profile</h1>

          <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Name</p>
              <p className="text-lg font-semibold">{user?.name}</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-lg font-semibold">{user?.email}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
