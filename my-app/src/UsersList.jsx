import React, { useContext } from "react";
import { UserContext } from "./App.jsx";

const UsersList = ({ field }) => {
  const users = useContext(UserContext);

  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          {field === "name" ? user.name : user.email}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
