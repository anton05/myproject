import React, { useState } from "react";
import UserService from "../services/userService";
import './input.css'
import { Link } from 'react-router-dom';


const Input = () => {
    const userService = new UserService();
    const [formData, setFormData] = useState({ name: '', userName: '' });

    const onInputChange = (inputName) => (e) => {
        setFormData({ ...formData, [inputName]: e.target.value })
    };
    const addUser = () => {
        userService.addUser(formData);
    };
    return (

        <div>
            <h1>Add user</h1>

            <div className='input'>
                <p>Name</p>
                <input className='inp' type='text' onChange={onInputChange('name')} /><br />
                <p>Lastname</p>
                <input className='inp' type='text' onChange={onInputChange('userName')} />
            </div>
            <button className='btn1' onClick={addUser}>ADD USER</button><br />
            <Link to="/users"><button className='btn1'>SHOW USER</button></Link>
        </div>
    );
};

export default Input;