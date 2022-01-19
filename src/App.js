import "./App.css";
import UserList from "./Component/UserList";
import UserEdit from "./Component/UserEdit";
import UserAdd from "./Component/UserAdd";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {["/", "/users"].map((path) => (
          <Route path={path} element={<UserList />} />
        ))}
        <Route exact path="/users/add" element={<UserAdd />} />
        <Route exact path="/users/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}

export default App;
