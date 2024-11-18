import React, { useState, useEffect } from "react";

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [department, setDepartment] = useState(user ? user.company.name : "");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDepartment(user.company.name);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, company: { name: department } };
    onSubmit(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Department:
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
