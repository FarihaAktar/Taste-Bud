import './App.css';
import HomePage from './components/reactComponents/HomePage/HomePage';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddService from './components/Admin/AddService/AddService';
import ManageService from './components/Admin/ManageService/ManageService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Login from './components/Login/Login';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log('data is ', loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/manageService">
            <ManageService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
