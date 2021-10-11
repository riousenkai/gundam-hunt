import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restoreUser } from "../../store/session";
import { retrieveUser } from "../../store/user";
import { Redirect, useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import "./Settings.css";
import Loading from "../Loading/Loading";
import { editUserProfile } from "../../store/user";

const Settings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const loggedUser = useSelector((state) => state.session.user);
  const user = useSelector((state) => state.user.mainUser);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => dispatch(retrieveUser(loggedUser.id)))
      .then(() => setDescription(user.description))
      .then(() => setImage(user.image_url))
      .then(() => console.log(user))
      .then(() => setLoaded(true))
      .catch(() => <Redirect to="/" />);
  }, [user]);

  const updateProfile = (e) => {
    e.preventDefault();

    const update = {
      description,
      image_url: image,
    };

    dispatch(editUserProfile(user.id, update));
    history.push(`/profile/${user.id}`);
  };

  if (loaded) {
    return (
      <div className="settings-main">
        <div className="settings-change">
          <p className="settings-title">Update Your Profile</p>
          <form onSubmit={updateProfile} className="form">
            <label className="settings-label">Description</label>
            <input
              className="settings-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="settings-label">Image Url</label>
            <input
              className="settings-input"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <div className="settings-buttons">
            <button type="submit" className="settings-submit">Submit Changes</button>
            <NavLink to={`/profile/${user.id}`} className="settings-cancel">Cancel</NavLink>
            </div>
          </form>
        </div>
        <div className="settings-img-change">
          <p className="settings-title">Profile Picture</p>
          <img className="settings-img" src={user?.image_url}></img>
        </div>
      </div>
    );
  } else return <Loading />;
};

export default Settings;
