import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-link-container">
            <NavLink className="nav-link-path" to="/login">Log In</NavLink>
            <NavLink className="nav-link-path" to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="home-signup-login-nav">
        <div className="logo-home">
            <NavLink className="nav-link-path" exact to="/">Nightmarebnb</NavLink>

        </div>
        
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
