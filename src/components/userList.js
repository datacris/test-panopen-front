import React from "react";
import { Link } from "react-router-dom";

const userList = ({ filteredUsers }) => {
  return (
    <div className="list-group">
      {filteredUsers &&
        filteredUsers.map((user) => {
          const { name, email, role } = user.attributes;
          return (
            <Link
              to={`user/${user.id}`}
              className="list-group-item list-group-item-action"
              key={user.id}
            >
              <div>{`name: ${name} - email: ${email} - role: ${role}`}</div>
            </Link>
          );
        })}
    </div>
  );
};

export default userList;
