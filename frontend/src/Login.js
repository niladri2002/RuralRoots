// Login.js

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  var token = ''

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/account/login', {
            username: username,
            password: password
        });

        // Assuming registration is successful and navigates to the home page
        token = response.data.token
        console.log('Registration successful',token);
        onLogin(token)

    } catch (error) {
        console.error('Error:', error);
      }
  };
  

  

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
