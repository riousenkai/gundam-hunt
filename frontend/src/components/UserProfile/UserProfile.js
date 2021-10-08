import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const history = useHistory("");
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);

  const prevent = (e) => {
    e.preventDefault()
  }

  return (
    <div className="profile-body">
      <div className="profile-top">
        <div className="profile-img-card">
          <img
            className="profile-img"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className="profile-info">
          <p className="profile-username">{user.username}</p>
          <p className="profile-description">Hello.</p>
          <button className="edit-profile">Edit My Profile</button>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-bottom-left">
          <div className="profile-upvotes">Upvotes (2)</div>
          <div className="profile-activity">
            <NavLink to="/" className="activity-card">
                <img className="activity-img" src="https://p-bandai.com/img/sg/p/m/N2569532001001_001.jpg" />
                <div className="activity-card-text">
                    <p className="activity-title">Shin Musha Gundam</p>
                    <p className="activity-description">Master Grade</p>
                </div>
                <button type="button" className="activity-upvote" onClick={prevent}>1</button>
            </NavLink>
            <NavLink to="/" className="activity-card">
                <img className="activity-img" src="https://p-bandai.com/img/sg/p/m/N2569532001001_001.jpg" />
                <div className="activity-card-text">
                    <p className="activity-title">Shin Musha Gundam</p>
                    <p className="activity-description">Master Grade</p>
                </div>
                <button type="button" className="activity-upvote" onClick={prevent}>1</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
