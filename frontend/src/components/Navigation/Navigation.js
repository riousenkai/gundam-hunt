import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchFiveGundams, searchFiveUsers } from "../../store/search";
import { useShowModal } from "../../context/ShowModal";
import { useHistory } from "react-router";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormPage";
import "./Navigation.css";
import image from "../Images/header.png";
import image2 from "../Images/header2.png";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user);
  const gundamResult = useSelector((state) => state.search.gundams);
  const userResult = useSelector((state) => state.search.users);
  const { results, setResults } = useShowModal();

  let searchDiv;
  let img;
  let searchRes;
  let searchInput;

  useEffect(() => {
    img = document.getElementById("img-top");
    searchDiv = document.querySelector(".search-container");
    searchRes = document.querySelector(".search-results");
    if (results.length >= 3) {
      searchRes.classList.remove("hidden");
    } else {
      searchRes.classList.add("hidden");
    }
    if (results.length > 1) {
      dispatch(searchFiveGundams(results));
      dispatch(searchFiveUsers(results));
    }
  }, [results, dispatch]);

  const hide = () => {
    searchInput = document.querySelector(".search");
    searchRes = document.querySelector(".search-results");
    searchDiv = document.querySelector(".search-container");
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    searchInput.classList.add("search-focus");
    dropdown.forEach((e) => {
      e.classList.add("hidden");
    });
    searchRes.classList.add("hidden");
    if (results.length >= 3) {
      searchRes.classList.remove("hidden");
    }
    searchDiv.classList.add("search-container-focus");
  };

  const show = (e) => {
    searchInput = document.querySelector(".search");
    searchDiv = document.querySelector(".search-container");
    searchRes = document.querySelector(".search-results");
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    console.log(e.currentTarget);
    if (!e.currentTarget.contains(e.relatedTarget)) {
      dropdown.forEach((e) => {
        e.classList.remove("hidden");
        searchInput.classList.remove("search-focus");
        searchRes.classList.add("hidden");
        searchDiv.classList.remove("search-container-focus");
      });
    }
    if (results.length > 1) {
      dispatch(searchFiveGundams(results));
      dispatch(searchFiveUsers(results));
    }
  };

  const removeVal = (e) => {
    setResults("");
    searchDiv = document.querySelector(".search-container");
    searchInput = document.querySelector(".search");
    searchInput.classList.remove("search-focus");
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((el) => {
      el.classList.remove("hidden");
    });
    searchDiv.classList.remove("search-container-focus");
  };

  const moveSearch = () => {
    setResults(results);
    searchDiv = document.querySelector(".search-container");
    searchInput = document.querySelector(".search");
    searchInput.classList.remove("search-focus");
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((e) => {
      e.classList.remove("hidden");
    });
    searchDiv.classList.remove("search-container-focus");
  };

  const searcher = () => {
    setResults(results);
    searchDiv = document.querySelector(".search-container");
    searchInput = document.querySelector(".search");
    searchInput.classList.remove("search-focus");
    const dropdown = document.querySelectorAll(".gundam-dropdown");
    dropdown.forEach((e) => {
      e.classList.remove("hidden");
    });
    searchDiv.classList.remove("search-container-focus");
    history.push("/search")
  }

  const imgChange = () => {
    img = document.getElementById("img-top");
    img.src = image2;
  };

  const imgReturn = () => {
    img = document.getElementById("img-top");
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
  return (
    <div className="header">
      <NavLink to="/" className="header-icon">
        <img
          alt="Missing Image"
          id="img-top"
          src={image}
          onMouseOver={imgChange}
          onMouseOut={imgReturn}
        />
      </NavLink>
      <div className="search-container" onBlur={(e) => show(e)}>
        <input
          className="search"
          value={results}
          onChange={(e) => setResults(e.target.value)}
          type="search"
          placeholder="Search..."
          onFocus={hide}
          onKeyPress={(e) => e.key === 'Enter' && searcher()}
        />
        <div className="search-results hidden">
          <div className="inner-results">
            {gundamResult?.gundams?.length > 0 ? (
              <div className="nopointer results">Gundams</div>
            ) : null}
            {gundamResult.gundams &&
              gundamResult.gundams.slice(0, 5).map((gundam) => (
                <NavLink
                  to={`/gundams/${gundam.id}`}
                  onClick={removeVal}
                  className="pointer results"
                >
                  <img
                    alt="Missing Image"
                    className="search-img"
                    src={gundam.image1}
                  />
                  <p className="search-name">
                    {gundam.name} : {gundam.grade}
                  </p>
                </NavLink>
              ))}
            {userResult?.users?.length > 0 ? (
              <div className="nopointer results">Users</div>
            ) : null}
            {userResult.users &&
              userResult.users.slice(0, 5).map((user) => (
                <NavLink
                  key={user.id}
                  to={`/profile/${user.id}`}
                  className="pointer results"
                  onClick={removeVal}
                >
                  <img
                    alt="Missing Image"
                    className="search-img"
                    src={user.image_url}
                  />
                  <p className="search-name">{user.username}</p>
                </NavLink>
              ))}
          </div>
          <NavLink
            to="/search"
            className="pointer results"
            onClick={moveSearch}
          >
            View more results...
          </NavLink>
        </div>
      </div>
      <div className="gundam-dropdown">
        <button className="gundam-dropbtn">Gundam Kits</button>
        <div className="gundam-dropdown-content">
          <NavLink to="/gundams">All Gundams</NavLink>
          <NavLink to="/">Link 2</NavLink>
          <NavLink to="/">Link 3</NavLink>
        </div>
      </div>
      <div className="gundam-dropdown">
        <button className="gundam-dropbtn">Tools</button>
        <div className="gundam-dropdown-content">
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/">Link 2</NavLink>
          <NavLink to="/">Link 3</NavLink>
        </div>
      </div>
      <div className="gundam-dropdown">
        <button className="gundam-dropbtn">About</button>
        <div className="gundam-dropdown-content">
          <NavLink to="/">Link 1</NavLink>
          <NavLink to="/">Link 2</NavLink>
          <NavLink to="/">Link 3</NavLink>
        </div>
      </div>
      <div className="nav-right">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
