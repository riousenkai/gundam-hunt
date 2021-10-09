import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useShowModal } from "../../context/ShowModal";
import { NavLink, useHistory } from "react-router-dom";
import { retrieveUser } from "../../store/user";


function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [ loaded, setLoaded ] = useState(false);
  const { setShowModal, setNum } = useShowModal();
  const mainUser = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(retrieveUser(user.id)).then(() => setLoaded(true))
  }, [user.id]);

  const logout = (e) => {
    e.preventDefault();
    setShowModal(false);
    setNum(0);
    dispatch(sessionActions.logout());
    history.push("/")
  };

  if(loaded) {
  return (
    <>
    <button className="submit-post gundam-dropdown">Submit</button>
    <div className="gundam-dropdown">
      {console.log(user)}
      <button className="gundam-dropbtn">
        <img src={mainUser.image_url} />
        {/* <i className="fas fa-user-circle" /> */}
      </button>
      <div className="gundam-dropdown-content-right">
        <NavLink to={`/profile/${user.id}`}>Profile</NavLink>
        <NavLink to="/">My Gundams</NavLink>
        <NavLink to="/">Settings</NavLink>
        <NavLink to="/">{user.email}</NavLink>
        <div onClick={logout}>Log Out</div>
      </div>
    </div>
    </>
  );
  } else {
    return null;
  }
}

export default ProfileButton;
