import React, { useState } from "react";
import UserForm from "./UserForm";

const UserCard = ({ user, onEditUser, onDeleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleDeleteClick = () => onDeleteUser(user.id);

  return (
    <div className="user-card">
      {isEditing ? (
        <UserForm
          user={user}
          onSubmit={(updatedUser) => {
            onEditUser(user.id, updatedUser);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Department: {user.company.name}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </div>
  );
};

export default UserCard;
