import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchFiveGundams } from "../../store/search";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";
import "./Navigation.css";
import image from "../Images/header.png";
import image2 from "../Images/header2.png";

function Navigation({ isLoaded }) {
  const history = useHistory("");
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const gundamResult = useSelector((state) => state.search.gundams);
  const searchDiv = document.querySelector(".search-container");
  const img = document.getElementById("img-top");
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);
  let searchRes = document.querySelector(".search-results");


  useEffect(() => {
    const searchRes = document.querySelector(".search-results");
    if (results.length >= 3) {
      searchRes.classList.remove("hidden");
    } else {
      searchRes.classList.add("hidden");
    }
    if (results.length > 1) {
      dispatch(searchFiveGundams(results)).then(console.log(gundamResult));
    }
    setLoaded(true)
  }, [results]);

  const hide = () => {
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((e) => {
      e.classList.add("hidden");
    });
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

  const imgChange = () => {
    img.src = image2;
  };

  const imgReturn = () => {
    img.src = image;
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <SignupFormModal />
        <LoginFormModal />
      </>
    );
  }
  if (loaded) {
    return (
      <div className="header">
        <NavLink to="/" className="header-icon">
          <img
            id="img-top"
            src={image}
            onMouseOver={imgChange}
            onMouseOut={imgReturn}
          />
        </NavLink>
        <div className="search-container">
          <input
            className="search"
            value={results}
            onChange={(e) => setResults(e.target.value)}
            type="search"
            placeholder="Search..."
            onFocus={hide}
            onBlur={show}
          />
          <div className="search-results hidden">
            {gundamResult.gundams.length ? (
              <div className="pointer results">Gundams</div>
            ) : null}
            {gundamResult.gundams.length ?
              gundamResult.gundams.map((gundam) => (
                <NavLink
                  to={`/gundams/${gundam.id}`}
                  className="pointer results"
                >
                  {gundam.name} : {gundam.grade}
                </NavLink>
              )) : null}
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
        <div className="nav-right">{isLoaded && sessionLinks}</div>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default Navigation;
