import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import UsersList from "./UsersList.jsx";

export const UserContext = createContext();

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserContext.Provider value={users}>
      <Router>
        <div className="container">
          <h1>Users</h1>
          <nav>
            <Link to="/names" className="names-link">Show Names</Link>
            <Link to="/emails" className="emails-link">Show Emails</Link>
          </nav>

          <Routes>
            <Route path="/names" element={<UsersList field="name" />} />
            <Route path="/emails" element={<UsersList field="email" />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
