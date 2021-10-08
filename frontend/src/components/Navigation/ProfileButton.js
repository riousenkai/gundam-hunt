import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useShowModal } from "../../context/ShowModal";
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { setShowModal, setNum } = useShowModal();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    setShowModal(false);
    setNum(0);
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <button className="submit-post">Submit</button>
    <div className="gundam-dropdown">
      <button className="gundam-dropbtn pointer">
        <i className="fas fa-user-circle" />
      </button>
      <div className="gundam-dropdown-content-right">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">My Gundams</NavLink>
        <NavLink to="/">Settings</NavLink>
        <NavLink to="/">{user.email}</NavLink>
        <div onClick={logout}>Log Out</div>
      </div>
    </div>
    </>
  );
}

export default ProfileButton;
