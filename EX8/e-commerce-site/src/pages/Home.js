import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Our E-commerce Store!</h1>
      <p>
        Discover a wide variety of products at unbeatable prices. Whether you’re looking for electronics, fashion, or home essentials, we’ve got it all! 
      </p>
      <p>
        Browse through our collection to find the best deals and enjoy a seamless shopping experience.
      </p>
      <Link to="/products">
        <button className="explore-button">Explore Products</button>
      </Link>
    </div>
  );
};

export default Home;
