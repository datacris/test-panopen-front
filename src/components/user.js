/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const User = () => {
  const params = useParams();
  const ENDPOINT = `http://localhost:3000/api/v1/users/${params.userId}`;
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");

  // fetching user from API
  useEffect(() => {
    const fetchUser = async () => {
      await fetch(ENDPOINT)
        .then((res) => res.json())
        .then((response) => {
          setUser(response.data);
          setUserName(response.data.attributes.name);
        });
    };
    fetchUser();
  }, []);

  // Updaing user's name
  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  // Updates the user's name in API
  const UpdateUser = (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: userName }),
      };
      fetch(ENDPOINT, requestOptions)
        .then((response) => response.json())
        .then((response) => {
          setUser(response.data);
        });
      Toastify({
        text: "User has been updated successfully",
        duration: 3000,
        close: true,
        gravity: "top",
        positionLeft: false,
        className: "alert-warning",
      }).showToast();
    } catch (error) {
      console.log("Error updating user: ", error.message);
    }
  };

  return (
    <div className="jumbotron">
      <h1 className="display-4">Edit User {params.userId}- Demo courses</h1>
      <hr className="my-4"></hr>
      <form>
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              g
              className="form-control"
              id="name"
              placeholder="Name"
              value={userName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputPassword3"
              placeholder="Email"
              value={user.attributes?.email}
              disabled
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="role" className="col-sm-2 col-form-label">
            Role
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="role"
              placeholder="Role"
              value={user.attributes?.role}
              disabled
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-info btn-lg"
              onClick={UpdateUser}
            >
              Save
            </button>

            <Link to="/">
              <button className="btn btn-secondary btn-lg">Back</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default User;
