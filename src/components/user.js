import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

const User = () => {
  const params = useParams();
  const ENDPOINT = `http://localhost:3000/api/v1/users/${params.userId}`;
  const [user, setUser] = useState({});

  // fetching user from API
  useEffect(() => {
    const fetchUser = async () => {
      await fetch(ENDPOINT)
        .then((res) => res.json())
        .then((response) => setUser(response.data));
    };
    fetchUser();
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Edit User - Demo courses</h1>
      <hr className="my-4"></hr>
      <form>
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={user.attributes?.name}
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
            <button type="submit" className="btn btn-info btn-lg">
              Save
            </button>

            <Link to="/">
              <button type="submit" className="btn btn-secondary btn-lg">
                Back
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default User;
