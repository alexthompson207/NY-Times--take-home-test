import React from 'react';
import './Header.css';


const Header = () => {

  return (
    <header className='header-view'>
      <h1 className='header-title'>NY Times News Reader</h1>
      <p className='header-details'>Pulling top articles from the New York Times</p>
    </header>
  )
}

export default Header;