// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from './components/Signup';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <a href="/signup">Sign Up</a>
            <a href="/login">Log In</a>
            <a href="/logout">Log Out</a>
          </nav>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
