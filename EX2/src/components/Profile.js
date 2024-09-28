import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="profile-avatar" />
      <h1 className="profile-name">{user.name}</h1>
      <p className="profile-email">{user.email}</p>
      <p className="profile-bio">{user.bio}</p>
    </div>
  );
};

export default Profile;
