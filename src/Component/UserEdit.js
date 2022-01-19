import { useState, useEffect } from "react";
import "./user-form.css";
import UserService from "../services/userService";
import { useParams, useNavigate, Link } from "react-router-dom";

const UserEdit = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    userName: "",
  });
  const userService = new UserService();

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundUser = userService.getUserById(id);
      if (foundUser) {
        setUser(foundUser);
      } else {
        navigate("/");
      }
    }
  }, [id]);

  const onInputChange = (inputName) => (evt) => {
    setUser({
      ...user,
      [inputName]: evt.target.value,
    });
  };

  const updateUser = () => {
    userService.updateUser(user);
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
          value={user.name}
        />
        <br />
        <p>Username</p>
        <input
          className="form-input"
          type="text"
          onChange={onInputChange("userName")}
          placeholder="Username"
          value={user.userName}
        />
      </div>
      <button className="btn" onClick={updateUser}>
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
