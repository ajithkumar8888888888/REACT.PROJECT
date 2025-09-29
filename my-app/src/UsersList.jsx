import React, { useContext } from "react";
import { UserContext } from "./App.jsx";

const UsersList = ({ field }) => {
  const users = useContext(UserContext);

  return (
    <ul className="list-disc pl-6">
      {users.map((user) => (
        <li key={user.id} className="mb-2">
          {field === "name" ? user.name : user.email}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
