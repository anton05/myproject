import React, { useEffect, useState } from "react";
import UserService from "../services/userService";
import "./user-form.css";
import { Link } from "react-router-dom";

const UserAdd = () => {
  const userService = new UserService();
  const [user, setUser] = useState({ name: "", userName: "" });
  const [nameDirty, setNameDirty] = useState(false);
  const [lastnameDirty, setLastnameDirty] = useState(false);
  const [nameError, setNameError] = useState('input Name cannot be empty');
  const [lastnameError, setlastnameError] = useState('input Lastname cannot be empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameDirty || lastnameDirty) {
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  }, [nameDirty, lastnameDirty])

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        if (e.target.value.length > 3) {
          setNameDirty(false)
        }
        break;
      case 'lastname':
        setLastnameDirty(true);
        if (e.target.value.length > 3) {
          setLastnameDirty(false)
        }
        break;
    }
  };

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
        {(nameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
        <input
          onBlur={e => blurHandler(e)}
          name="name"
          className="form-input"
          type="text"
          placeholder="Name"
          onChange={onInputChange("name")}
          value={user.name}
        />
        <br />
        <p>Lastname</p>
        {(lastnameDirty && lastnameError) && <div style={{ color: 'red' }}>{lastnameError}</div>}
        <input
          onBlur={e => blurHandler(e)}
          name="lastname"
          className="form-input"
          type="text"
          placeholder="Lastname"
          onChange={onInputChange("userName")}
          value={user.userName}
        />
      </div>
      <button className="btn" onClick={addUser} disabled={!formValid}>
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
