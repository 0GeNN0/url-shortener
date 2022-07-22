import React, { } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Nav";
import Login from './Login';

const Header = () => {

  const isTabletOrBigger = useMediaQuery({ query: '(min-width: 801px)' });

  return (
    <header>
      <div className="header container">
        <img src="./images/logo.svg" alt="logo" />
        {
          isTabletOrBigger ?
            <>
              <Navbar screen='desktop' />
              <Login screen='desktop' />
            </>
            :
            <>
              <div className='header-icon'>
                <img src='./images/menu-icon.svg' alt='menuIcon' className='menu-icon' />
              </div>
              <div className='list'>
                <Navbar />
                <Login />
              </div>
            </>
        }
      </div>
    </header>
  );
};

export default Header;