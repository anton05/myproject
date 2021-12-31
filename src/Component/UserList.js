import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserService from '../services/userService';
import './table.css'
const UserList = () => {

    const [users, setUsers] = useState([]);
    const userService = new UserService();

    useEffect(() => {
        setUsers(userService.getUsers())
    }, []);

    const deleteUser = (userId) => {
        userService.deleteUser(userId);
        setUsers(userService.getUsers())
    };

    return (
 
        <div>
            <h1>User list:</h1>
            <div className='contain'>
                <table>
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Name</th>
                            <th >Lastname</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((el, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.userName}</td>
                                        <td>
                                            <Link to='/users/edit'><button className='btn'>EDIT</button></Link>
                                            <button className='btn'onClick={deleteUser(el.id)}>DELETE</button>
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