import React, { useEffect, useState } from "react";
import UserList from "./userList";
import SearchBox from "./searchBox";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchField, setSearchField] = useState("");
  const ENDPOINT = "http://localhost:3000/api/v1/users";

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(ENDPOINT)
        .then((res) => res.json())
        .then((users) => setUsers(users.data));
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) =>
      user.attributes.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="jumbotron">
      <h1 className="display-4">PanOpen - Demo courses</h1>
      <hr className="my-4"></hr>
      <SearchBox onChangeHandler={onSearchChange} />
      <UserList filteredUsers={filteredUsers} />
    </div>
  );
};

export default Dashboard;
