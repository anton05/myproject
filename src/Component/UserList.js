import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/userService";
import "./table.css";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const userService = new UserService();

  useEffect(() => {
    setUsers(userService.getUsers());
  }, []);

  const deleteUser = (userId) => {
    userService.deleteUser(userId);
    setUsers(userService.getUsers());
  };

  return (
    <div>
      <h1>User list:</h1>
      <div className="contain">
        <p>
          <Link to="/users/add" className="link">ADD NEW USER</Link>
        </p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Lastname</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.userName}</td>
                    <td>
                      <Link to={"/users/edit/" + user.id}>
                        <button className="btn">EDIT</button>
                      </Link>
                      <button className="btn" onClick={() => deleteUser(user.id)}>
                        DELETE
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
