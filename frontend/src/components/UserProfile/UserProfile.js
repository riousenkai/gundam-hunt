import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { retrieveUser, retrieveAllUsers } from "../../store/user";
import { restoreUser } from "../../store/session";
import "./UserProfile.css";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const mainUser = useSelector((state) => state.user.user);
  const allUsers = useSelector((state) => state.user.users);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser());
    dispatch(retrieveUser(id));
    dispatch(retrieveAllUsers()).then(() => setLoaded(true));
  }, [id]);

  const prevent = (e) => {
    e.preventDefault();
  };

  // date change
  const dateChange = (date) => {
    const dateSplit = date.split("T");
    const finDate = dateSplit[0].split("-");
    return `${finDate[1]}/${finDate[2]}/${finDate[0]}`;
  };

  if (loaded === true) {
    if (allUsers.users.length < +id) return <Redirect to="/" />;
    return (
      <div className="profile-body">
        <div className="profile-top">
          <div className="profile-img-card">
            <img className="profile-img" src={mainUser?.image_url} />
          </div>
          <div className="profile-info">
            <p className="profile-username">{mainUser?.username}</p>
            <p className="profile-description">{mainUser?.description}</p>
            {user.username === mainUser.username ? (
              <NavLink to="/settings">
                <button className="edit-profile">Edit my profile</button>
              </NavLink>
            ) : null}
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-bottom-left">
            <div className="profile-upvotes">Upvotes (2)</div>
            <div className="profile-activity">
              <NavLink to="/" className="activity-card">
                <img
                  className="activity-img"
                  src="https://p-bandai.com/img/sg/p/m/N2569532001001_001.jpg"
                />
                <div className="activity-card-text">
                  <p className="activity-title">Shin Musha Gundam</p>
                  <p className="activity-description">Master Grade</p>
                </div>
                <button
                  type="button"
                  className="activity-upvote"
                  onClick={prevent}
                >
                  5422
                </button>
              </NavLink>
              <NavLink to="/" className="activity-card">
                <img
                  className="activity-img"
                  src="https://p-bandai.com/img/sg/p/m/N2569532001001_001.jpg"
                />
                <div className="activity-card-text">
                  <p className="activity-title">Shin Musha Gundam</p>
                  <p className="activity-description">Master Grade</p>
                </div>
                <button
                  type="button"
                  className="activity-upvote"
                  onClick={prevent}
                >
                  1
                </button>
              </NavLink>
            </div>
          </div>
          <div className="profile-bottom-right">
            <div className="profile-comments">
              <i className="fas fa-birthday-cake"></i>
              <p className="user-joined">Joined on {mainUser?.createdAt}</p>
            </div>
            <p className="profile-comments-title">Comments</p>
            <div className="profile-comments-right">
              {!mainUser.comments && <div>No comments yet.</div>}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="profile-loading">
        <img className="loading-img" src="https://c.tenor.com/zt4FFbGYIvcAAAAM/gundam.gif" />
      </div>
    );
  }
};

export default UserProfile;

// https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
