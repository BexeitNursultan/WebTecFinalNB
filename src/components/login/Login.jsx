
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3307/login', { username, password });
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
    </form>
);
};

export default Login;
