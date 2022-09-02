import React from "react";

const userList = ({ filteredUsers }) => {
  return (
    <div className="list-group">
      {filteredUsers &&
        filteredUsers.map((user) => {
          const { name, email, role } = user.attributes;
          return (
            <a
              href="#"
              className="list-group-item list-group-item-action"
              key={user.id}
            >
              <div>{`name: ${name} - email: ${email} - role: ${role}`}</div>
            </a>
          );
        })}
    </div>
  );
};

export default userList;
