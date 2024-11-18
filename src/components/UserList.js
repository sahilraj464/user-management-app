import React, { useState } from "react";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

const UserList = ({ users, onAddUser, onEditUser, onDeleteUser }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => setIsAdding(true);

  return (
    <div>
      <button onClick={handleAddClick}>Add New User</button>
      {isAdding && <UserForm onSubmit={onAddUser} onCancel={() => setIsAdding(false)} />}
      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEditUser={onEditUser}
            onDeleteUser={onDeleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
