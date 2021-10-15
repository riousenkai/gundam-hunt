import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { NavLink, Redirect } from "react-router-dom";
import { retrieveUser, retrieveAllUsers } from "../../store/user";
import {
  getUserGundams,
  createGundamUpvote,
  getUpvotedGundams,
} from "../../store/gundam";
import { getLimitedComment } from "../../store/comments";
import { useShowModal } from "../../context/ShowModal";
import Loading from "../Loading/Loading";
import "./UserProfile.css";
import { cp } from "fs";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const mainUser = useSelector((state) => state.user.user);
  const allUsers = useSelector((state) => state.user.users);
  const userGundams = useSelector((state) => state.gundam.user);
  const upvotedGundams = useSelector((state) => state.gundam.upvoted);
  const comments = useSelector((state) => state.comments.user);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState(false);
  const { setNum } = useShowModal();

  useEffect(() => {
    const regex = /\D/g;
    if (id.match(regex)) {
      history.push("/");
    }

    dispatch(retrieveUser(id))
      .then(() => dispatch(retrieveAllUsers()))
      .then(() => dispatch(getUserGundams(id)))
      .then(() => dispatch(getUpvotedGundams(id)))
      .then(() => dispatch(getLimitedComment(id)))
      .then(() => setLoaded(true));
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

  const upvote = (gundamId, e) => {
    e.preventDefault();

    if (!user) {
      return setNum(2);
    }

    dispatch(createGundamUpvote(user.id, gundamId, { gundam: "test" })).then(
      () => dispatch(getUserGundams(id))
    );
  };

  const upvote2 = (gundamId, e) => {
    e.preventDefault();

    if (!user) {
      return setNum(2);
    }

    dispatch(createGundamUpvote(user.id, gundamId, { gundam: "test" })).then(
      () => dispatch(getUpvotedGundams(id))
    );
  };

  useEffect(() => {
    const bottom = document.querySelector(".see-more");

    if (view) {
      bottom?.classList.add("hidden");
    } else {
      bottom?.classList.remove("hidden");
    }
  }, [view]);

  if (loaded === true) {
    if (allUsers.users.length < +id) return <Redirect to="/" />;
    return (
      <div className="profile-body">
        <div className="profile-top">
          <div className="profile-img-card">
            <img
              alt="Missing Image"
              className="profile-img"
              src={mainUser?.image_url}
            />
          </div>
          <div className="profile-info">
            <p className="profile-username">{mainUser?.username}</p>
            <p className="profile-description">{mainUser?.description}</p>
            {user?.id === mainUser?.id ? (
              <NavLink to="/settings">
                <button className="edit-profile">Edit my profile</button>
              </NavLink>
            ) : null}
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-bottom-left">
            <div className="profile-upvotes">
              Upvoted ({upvotedGundams.length})
            </div>
            <div className="profile-activity">
              {upvotedGundams &&
                upvotedGundams.map((gundam) => (
                  <NavLink
                    to={`/gundams/${gundam.id}`}
                    className="activity-card"
                  >
                    <img
                      alt="Missing Image"
                      className="activity-img"
                      src={gundam.image1}
                    />
                    <div className="activity-card-text">
                      <p className="activity-title">{gundam.name}</p>
                      <p className="activity-description">{gundam.grade}</p>
                    </div>
                    <button
                      type="button"
                      className="activity-upvote"
                      onClick={(e) => upvote2(gundam.id, e)}
                    >
                      {gundam.upvotes}
                    </button>
                  </NavLink>
                ))}
            </div>
            <div className="profile-submitted">
              Submissions ({userGundams?.length})
            </div>
            <div className="profile-activity">
              {userGundams &&
                userGundams.map((gundam) => (
                  <NavLink
                    to={`/gundams/${gundam.id}`}
                    className="activity-card"
                  >
                    <img
                      alt="Missing Image"
                      className="activity-img"
                      src={gundam.image1}
                    />
                    <div className="activity-card-text">
                      <p className="activity-title">{gundam.name}</p>
                      <p className="activity-description">{gundam.grade}</p>
                    </div>
                    <button
                      type="button"
                      className="activity-upvote"
                      onClick={(e) => upvote(gundam.id, e)}
                    >
                      {gundam.upvotes}
                    </button>
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="profile-bottom-right">
            <div className="profile-comments">
              <i className="fas fa-birthday-cake"></i>
              <p className="user-joined">
                Joined on {dateChange(mainUser?.createdAt)}
              </p>
            </div>
            <p className="profile-comments-title">
              Comments ({comments?.length})
            </p>
            <div className="profile-comment-container">
              {!comments && (
                <div className="profile-comment-card">No comments yet.</div>
              )}
              {comments?.slice(0, 5).map((comment) => (
                <div className="profile-comment-card">
                  <NavLink
                    to={`/gundams/${comment.gundam_id}`}
                    className="profile-comment-nav"
                  >
                    <p className="profile-comment">
                      {comment.comment.slice(0, 30)}
                      {comment.comment.length > 30 && "..."}
                    </p>
                    <p className="profile-comment-source">
                      on {dateChange(comment.updatedAt).split("/202")[0]} for{" "}
                      {comment.Gundam.name.slice(0, 26)}
                      {comment.Gundam.name.length > 26 && "..."}
                    </p>
                  </NavLink>
                </div>
              ))}
              {comments.length > 5 && (
                <div className="see-more" onClick={() => setView(true)}>
                  View all...
                </div>
              )}
              {view && (
                <>
                  {comments.slice(5).map((comment) => (
                    <div className="profile-comment-card">
                      <NavLink
                        to={`/gundams/${comment.gundam_id}`}
                        className="profile-comment-nav"
                      >
                        <p className="profile-comment">
                          {comment.comment.slice(0, 30)}
                          {comment.comment.length > 30 && "..."}
                        </p>
                        <p className="profile-comment-source">
                          on {dateChange(comment.updatedAt).split("/202")[0]}{" "}
                          for {comment.Gundam.name.slice(0, 26)}
                          {comment.Gundam.name.length > 26 && "..."}
                        </p>
                      </NavLink>
                    </div>
                  ))}
                  <div className="see-more" onClick={() => setView(false)}>
                    View less...
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default UserProfile;
