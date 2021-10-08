import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./UserProfile.css";

const UserProfile = () => {
  const history = useHistory("");
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);

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
    </div>
  );
};

export default UserProfile;
