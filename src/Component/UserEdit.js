import { useState, useEffect } from 'react';
import './input.css';
import UserService from '../services/userService';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = () => {
    const [user, setUser] = useState(null);
  const userService = new UserService();

  let {id} = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    if (id){
      const foundUser = userService.getUserById(id);
      if(foundUser){
        setUser(foundUser);
      }
      else{
        navigate("/");
      }
    }
  },[id]);

  const onInputChange = (inputName) => (evt) => {
    setUser({
    ...user,
    [inputName]: evt.target.value
    })
  }    
    return (
        <div>
            <h1>USER EDIT</h1>
            <div className='input'>
                <p>Name</p>
                <input className='inp' type='text' /><br />
                <p>Username</p>
                <input className='inp' type='text' />
            </div>
            <button className='btn1'>EDIT USER</button><br />
        </div>
    );
};

export default UserEdit;