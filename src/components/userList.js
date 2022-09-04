import React from "react";
import { Link } from "react-router-dom";

const userList = ({ filteredUsers }) => {
  return (
    <div className="list-group">
      {filteredUsers &&
        filteredUsers.map((user) => {
          const { name, email, role } = user.attributes;
          return (
            <div key={user.id}>
              <Link
                to={`user/${user.id}`}
                className="list-group-item list-group-item-action"
                key={user.id}
              >
                <div>{`Name: ${name} - Email: ${email} - Role: ${role}`}</div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default userList;
