import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    }
  };

  const addUser = async (newUser) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      setUsers((prevUsers) => [...prevUsers, response.data]);
    } catch (err) {
      setError("Failed to add user. Please try again.");
    }
  };

  const editUser = async (userId, updatedUser) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user))
      );
    } catch (err) {
      setError("Failed to update user. Please try again.");
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>User Management</h1>
      {error && <ErrorMessage message={error} />}
      <UserList
        users={users}
        onAddUser={addUser}
        onEditUser={editUser}
        onDeleteUser={deleteUser}
      />
    </div>
  );
};

export default App;
