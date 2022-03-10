import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../images/nightmarebnb.png';

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
            <img className="bat-logo" src={logo} alt="this-is-my-logo"/>
            <NavLink className="nav-link-path" id="nightmarebnb-nav-link" exact to="/">nightmarebnb</NavLink>
        </div>

        <div className="nav-spots-btn-container">
          <NavLink className="nav-spots-btn"exact to="/spots">
            Take me to the spots 👻
          </NavLink>

        </div>

        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
