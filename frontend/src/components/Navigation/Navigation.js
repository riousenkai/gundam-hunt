import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import image from '../Images/header.png'

function Navigation({ isLoaded }) {
  const history = useHistory("");

  const sessionUser = useSelector((state) => state.session.user);
  const searchDiv = document.querySelector(".search-container");
  const searchRes = document.querySelector(".search-results");

  const hide = () => {
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((e) => {
      e.classList.add("hidden");
    });
    searchRes.classList.remove("hidden");
    searchDiv.classList.add("search-container-focus");
  };

  const show = () => {
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((e) => {
      e.classList.remove("hidden");
    });
    searchRes.classList.add("hidden");
    searchDiv.classList.remove("search-container-focus");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/signup" className="gundam-dropdown nav-right">
          Sign Up
        </NavLink>
        <LoginFormModal />
      </>
    );
  }

  return (
    <div className="header">
      <NavLink to="/" className="header-icon">
        <img id="img-top" src={image} />
      </NavLink>
      <div className="search-container">
        <input
          className="search"
          type="search"
          placeholder="Search..."
          onFocus={hide}
          onBlur={show}
        />
        <div className="search-results hidden">
          <div className="pointer results" onMouseDown={() => history.push("/")}>
              Products
          </div>
          <div className="pointer results">People</div>
        </div>
      </div>
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
      <div className="nav-right">
      {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;