import React from 'react';
import chef from '../assets/chef_claude_icon.png';

const Header = () => {
  return (
    <>
      <header>
        <img src={chef} alt="" />
        <h1>Chef's Choice</h1>
      </header>
    </>
  );
};

export default Header;
