import { useState, useEffect } from "react";
import "./user-form.css";
import UserService from "../services/userService";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useValidation } from "../utils/useValidation";

const UserEdit = () => {
  const userService = new UserService();

  const rules = {
    name: function (value, model) {
      if (!value) {
        return "Name is required";
      }

      if (value.length > 50) {
        return "Name is too long (50c max)";
      }

      return "";
    },
    userName: function (value, model) {
      if (!value) {
        return "UserName is required";
      }

      if (value.length > 25) {
        return "UserName is too long (25c max)";
      }
      return "";
    },
  };

  const { values, errors, touched, onValueChange, setInitialValues, isValid } =
    useValidation(rules, {});

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundUser = userService.getUserById(id);
      if (foundUser) {
        setInitialValues(foundUser);
      } else {
        navigate("/");
      }
    }
  }, [id]);

  const onInputChange = (inputName) => (evt) => {
    onValueChange(inputName, evt.target.value);
  };

  const updateUser = () => {
    userService.updateUser(values);
    navigate("/");
  };

  return (
    <div>
      <h1>USER EDIT</h1>
      <div className="form-container">
        <p>Name</p>
        <input
          className="form-input"
          type="text"
          onChange={onInputChange("name")}
          placeholder="Name"
          value={values.name || ""}
        />
        {touched && errors.name && (
          <span className="validation-error">{errors.name}</span>
        )}
        <br />
        <p>Username</p>
        <input
          className="form-input"
          type="text"
          onChange={onInputChange("userName")}
          placeholder="Username"
          value={values.userName || ""}
        />
        {touched && errors.userName && (
          <span className="validation-error">{errors.userName}</span>
        )}
      </div>
      <button className="btn" onClick={updateUser} disabled={!isValid}>
        EDIT USER
      </button>
      <br />
      <Link to="/users">
        <button className="btn">SHOW USERS</button>
      </Link>
    </div>
  );
};

export default UserEdit;
