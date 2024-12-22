import React from "react";
import "./UserList.css";

const UserList = ({ users, activeUser, setActiveUser }) => {
  return (
    <div className="user-list">
      <h3>Active Users</h3>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className={user.id === activeUser.id ? "active-user" : ""}
            onClick={() => setActiveUser(user)} 
          >
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
