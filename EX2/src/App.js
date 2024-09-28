import React from 'react';
import Profile from './components/Profile';

const App = () => {
  // Example user data
  const user = {
    name: 'Karan',
    email: 'karan@example.com',
    bio: 'A software developer with a passion for learning and teaching.',
    avatar: 'https://www.example.com/avatar.jpg' // Replace with a real image URL
  };

  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
};

export default App;
