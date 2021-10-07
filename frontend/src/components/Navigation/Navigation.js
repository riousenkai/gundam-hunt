import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const hide = () => {
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((e) => {
      e.classList.add("hidden");
    });
  };

  const show = () => {
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((e) => {
      e.classList.remove("hidden");
    });
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup" className="gundam-dropdown">
          Sign Up
        </NavLink>
        <LoginFormModal />
      </>
    );
  }

  return (
    <div className="header">
      <NavLink to="/" className="header-icon">
        <img id="img-top" src="header.png" />
      </NavLink>
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onFocus={hide}
        onBlur={show}
      />
      <div className="gundam-dropdown">
        <button className="gundam-dropbtn">Gundam Kits</button>
        <div className="gundam-dropdown-content">
          <NavLink to="/">Link 1</NavLink>
          <NavLink to="/">Link 2</NavLink>
          <NavLink to="/">Link 3</NavLink>
        </div>
      </div>
      <div className="gundam-dropdown">
        <button className="gundam-dropbtn">Community</button>
        <div className="gundam-dropdown-content">
          <NavLink to="/">Link 1</NavLink>
          <NavLink to="/">Link 2</NavLink>
          <NavLink to="/">Link 3</NavLink>
        </div>
      </div>
      <div className="gundam-dropdown">
        <button className="gundam-dropbtn">Tools</button>
        <div className="gundam-dropdown-content">
          <NavLink to="/">Link 1</NavLink>
          <NavLink to="/">Link 2</NavLink>
          <NavLink to="/">Link 3</NavLink>
        </div>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
