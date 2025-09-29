
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
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          <nav className="flex gap-4 mb-6">
            <Link to="/names" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Show Names</Link>

            <Link to="/emails" className="px-4 py-2 bg-green-500 text-white rounded-lg">
              Show Emails
            </Link>

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
