import { useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { retrieveUser } from "../../store/user";
import "./UserProfile.css";

const UserProfile = () => {
  const { id } = useParams();
  console.log(useParams())
  console.log(id)
  const history = useHistory("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const mainUser = useSelector((state) => state.user.user);

  useEffect(() => {
     dispatch(retrieveUser(id));
     console.log(mainUser)
    if (!user) {
      history.push("/");
    }
  }, [id]);

  const prevent = (e) => {
    e.preventDefault();
  };

  const dateChange = (date) => {
    const dateSplit = date.split("T");
    const finDate = dateSplit[0].split("-");
    return `${finDate[1]}/${finDate[2]}/${finDate[0]}`;
  };

  return (
    <div className="profile-body">
      {mainUser && console.log(mainUser)}
      <div className="profile-top">
        <div className="profile-img-card">
          <img className="profile-img" src={user?.image_url} />
        </div>
        <div className="profile-info">
          <p className="profile-username">{user?.username}</p>
          <p className="profile-description">{user?.description}</p>
          <button className="edit-profile">Edit My Profile</button>
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
            <p className="user-joined">
              Joined on {user.createdAt && dateChange(user.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
