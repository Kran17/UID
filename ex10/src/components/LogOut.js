// src/components/LogOut.js
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LogOut() {
  const { logOut } = useContext(AuthContext);

  return (
    <button onClick={logOut}>Log Out</button>
  );
}

export default LogOut;
