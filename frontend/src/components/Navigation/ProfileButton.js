import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link, useHistory } from 'react-router-dom';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <Link className="add-spooky-spot-link"to="/add-spot">
        Add a New Spooky Spot
      </Link>

      <div className="home-ghost-btn">
        <p className="ghost-btn-title">click me</p>
        <button onClick={openMenu}>
          <img className="prof-btn-ghost-gif"src="https://data.whicdn.com/images/100722526/original.gif" alt="prof-btn-ghost-gif"/>
          {/* <i className="fa-solid fa-ghost"></i> */}
        </button>
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <p className="user-info-title">Welcome, {user.username}</p>
          <p className="user-info-title">email: {user.email}</p>
          <div className="logout-btn-container">
              <button onClick={logout}>Log Out</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
