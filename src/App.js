import './App.css';
import Input from './Component/input';
import UserList from './Component/UserList';
import UserEdit from './Component/UserEdit';

import { Route, Routes, useParams } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Input />} />
        <Route exact path = '/users' element={<UserList />}  />
        <Route exact path = '/users/edit/:id' element={<UserEdit />}  />
      </Routes>


    </div>
  );
}

export default App;


