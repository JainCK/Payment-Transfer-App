import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div className=" mx-auto px-4">
      <div className="font-semibold  text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded bg-slate-200 border-gray-400"
        ></input>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 bg-gray-200 flex items-center justify-center mr-2">
            <div className="text-xl">{user.firstName[0]}</div>
          </div>
          <div>
            <div className="text-lg font-semibold">{user.firstName} {user.lastName}</div>
          </div>
        </div>
        <div>
          <button
            onClick={(e) => {
              navigate("/transfer?id=" + user._id + "&name=" + user.firstName);
            }}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;
