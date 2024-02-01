import React, { useState } from 'react';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';
import { BsFillBasket2Fill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { RxTriangleDown } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const handleUserIconHover = () => {
    setLoginFormVisible(true);
  };

  const handleUserIconLeave = () => {
    setLoginFormVisible(false);
  };

  return (
    <div className='navbar'>
      <div className='navbar-wrapper container'>
        <nav>
          <a href='/' className='link'>
            <span className='bars icon'><FaBars /></span>
            <p>All Departments</p>
            <span className='triangle icon'><RxTriangleDown /></span>
          </a>

          <div className='nav-links container'>
            {/* Your existing navigation links */}
          </div>

          <div className='navbar-con' onMouseOver={handleUserIconHover} onMouseLeave={handleUserIconLeave}>
            <span className='user'><FaRegUser /></span>
            <span className='heart'><FaRegHeart /></span>
            <span className='basket'><BsFillBasket2Fill /></span>
          </div>

          {/* {isLoginFormVisible && (
            <div className='login-form'>
              <form>
                <label>
                  Username:
                  <input type='text' />
                </label>
                <label>
                  Password:
                  <input type='password' />
                </label>
                <button type='submit'>Login</button>
              </form>
            </div>
          )} */}

          <div className='linking'>
            {/* Your existing sign-in and sign-up links */}
            <Link to='/login' className={`log-in ${location.pathname === '/login' ? 'active' : ''}`}>
              Sign In
            </Link>
            <Link to='/signup' className={`sign-up ${location.pathname === '/signup' ? 'active' : ''}`}>
              Sign Up
            </Link>
          </div> 

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
