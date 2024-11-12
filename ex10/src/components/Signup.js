// src/components/SignUp.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
