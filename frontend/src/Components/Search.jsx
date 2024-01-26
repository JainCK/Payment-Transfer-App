import React from "react";

const Search = () => {
  return (
    <>
      <div className="my-5 border">
        <h2 className="font-bold text-2xl ml-10">Users</h2>
        <input
          type="text"
          className="h-8 w-4/5 mx-10 mt-5 border-slate-700 rounded text-lg"
          placeholder="Search Users..."
        />
      </div>
    </>
  );
};

export default Search;
