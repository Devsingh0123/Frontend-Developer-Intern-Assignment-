import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full md:w-72 ">
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          px-4
          py-1
          border
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          block md:inline
        "
      />
    </div>
  );
};

export default SearchBar;
