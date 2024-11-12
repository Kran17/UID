// src/components/LogIn.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LogIn() {
  const { logIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async (e) => {
    e.preventDefault();
    await logIn(email, password);
  };

  return (
    <form onSubmit={handleLogIn}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LogIn;
