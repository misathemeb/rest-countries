
import React from 'react';

const Home = ({ image, displayText }) => {
  const type = ''

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url("${
          image}")
          `,
      }}
    >
      <h2>{displayText}
      </h2>
    </div>
  );
};

export default Home;

