import React, { useState } from "react";
import UserService from "../services/userService";
import "./user-form.css";
import { Link } from "react-router-dom";

const UserAdd = () => {
  const userService = new UserService();
  const [user, setUser] = useState({ name: "", userName: "" });

  const onInputChange = (inputName) => (e) => {
    setUser({ ...user, [inputName]: e.target.value });
  };
  const addUser = () => {
    userService.addUser(user);
    setUser({ name: "", userName: "" });
  };

  return (
    <div>
      <h1>Add user</h1>

      <div className="form-container">
        <p>Name</p>
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          onChange={onInputChange("name")}
          value={user.name}
        />
        <br />
        <p>Lastname</p>
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          onChange={onInputChange("userName")}
          value={user.userName}
        />
      </div>
      <button className="btn" onClick={addUser}>
        ADD USER
      </button>
      <br />
      <Link to="/users">
        <button className="btn">SHOW USERS</button>
      </Link>
    </div>
  );
};

export default UserAdd;
