import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

function App() {
  return (
      <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/add-friend">Add a Friend</Link>
          </li>
        </ul>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/add-friend" component={AddFriendForm} />
      </div>
  );
}

export default App;
