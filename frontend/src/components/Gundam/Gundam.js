import { useEffect, useState, useRef } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  singleGundam,
  getGundams,
  createGundamUpvote,
} from "../../store/gundam";
import { useShowModal } from "../../context/ShowModal";
import { NavLink, Redirect } from "react-router-dom";
import { retrieveUser } from "../../store/user";
import {
  getComments,
  editComment,
  deleteComment,
  createComment,
} from "../../store/comments";
import "./Gundam.css";
import Loading from "../Loading/Loading";
import SettingsModal from "../SettingsModal";
import DeleteGundamModal from "../DeleteGundamModal";

const Gundam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const gundams = useSelector((state) => state.gundam.gundams);
  const gundam = useSelector((state) => state.gundam[id]);
  const comments = useSelector((state) => state.comments);
  const [loaded, setLoaded] = useState(false);
  const [source, setSource] = useState("");
  const [comm, setComm] = useState("");
  const [newComment, setNewComment] = useState("");
  const [disabler, setDisabler] = useState(false);
  const { setShowModal, setNum } = useShowModal();

  const user = useSelector((state) => state.user.user);
  const loggedUser = useSelector((state) => state.session.user);

  useEffect(() => {
    const regex = /\D/g;
    if (id.match(regex)) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    dispatch(singleGundam(id)).catch(() => {
      history.push("/");
    });
    setShowModal(false);
    setNum(0);
  }, [id, dispatch]);

  useEffect(() => {
    setSource(gundam?.image1);
    dispatch(retrieveUser(gundam?.user_id))
      .then(() => dispatch(getComments(gundam?.id)))
      .then(() => setLoaded(true));
  }, [gundam, dispatch]);

  const dateChange = (date) => {
    const dateSplit = date.split("T");
    const finDate = dateSplit[0].split("-");
    return `${finDate[1]}/${finDate[2]}/${finDate[0]}`;
  };

  const editComments = (num) => {
    const com = document.querySelector(`.comment${num}`);
    const input = document.querySelector(`.input${num}`);
    const buttons = document.querySelectorAll(".comment-buttons");

    if (com.classList.contains("hidden")) {
      com.classList.remove("hidden");
      input.classList.add("hidden");
      buttons.forEach((button) => {
        button.classList.remove("hidden");
      });
    } else {
      com.classList.add("hidden");
      input.classList.remove("hidden");
      buttons.forEach((button) => {
        button.classList.add("hidden");
      });
    }
  };

  const submitEdit = (num) => {
    const buttons = document.querySelectorAll(".comment-buttons");

    if (comm.length < 1) {
      return window.alert("Please place a comment!");
    }

    buttons.forEach((button) => {
      button.classList.remove("hidden");
    });

    const payload = {
      comment: comm,
    };
    dispatch(editComment(payload, id, num))
      .then(() => editComments(num))
      .then(() =>
        buttons.forEach((button) => {
          button.classList.remove("hidden");
        })
      );
  };

  const delComm = (num) => {
    dispatch(deleteComment(id, num));
  };

  const submitComment = async () => {
    if (!loggedUser) {
      return setNum(2);
    }

    if (newComment.length < 1) {
      return window.alert("Please place a comment!");
    }

    const payload = {
      user_id: loggedUser.id,
      gundam_id: id,
      comment: newComment,
    };

    setNewComment("");

    await dispatch(createComment(payload, id));
  };

  const upvote = () => {
    if (!loggedUser) {
      return setNum(2);
    }

    const payload = {
      user_id: loggedUser.id,
      gundam_id: id,
    };

    dispatch(createGundamUpvote(loggedUser.id, id, payload));
  };

  if (loaded) {
    return (
      <div className="gundam-main">
        <div className="gundam-title">
          <p className="gundam-title-text">{gundam?.name}</p>
          <p className="gundam-title-grade">{gundam?.grade}</p>
        </div>
        <div className="gundam-info-main">
          <div className="gundam-left">
            <div className="gundam-left-info">
              <div className="gundam-img">
                <img
                  className="gundam-highlight-img"
                  id="main-img"
                  src={source}
                />
                <div className="gundam-mini-img-card">
                  <img
                    className="gundam-mini-img"
                    src={gundam?.image1}
                    onClick={() => setSource(gundam?.image1)}
                  ></img>
                  <img
                    className="gundam-mini-img"
                    src={gundam?.image2}
                    onClick={() => setSource(gundam?.image2)}
                  ></img>
                  <img
                    className="gundam-mini-img"
                    src={gundam?.image3}
                    onClick={() => setSource(gundam?.image3)}
                  ></img>
                </div>
              </div>
              <div className="gundam-left-description">
                <p className="gundam-description">{gundam?.description}</p>
              </div>
            </div>
            <div className="gundam-left-comments">
              <p className="gundam-comment-post-title">Submit a comment</p>
              <textarea
                className="gundam-comment-post-input"
                autoComplete="false"
                spellCheck="false"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button className="comment-submit" onClick={submitComment}>
                Submit
              </button>
            </div>
            <div className="gundam-left-comments">
              <p className="gundam-comment-title">Comments</p>
              {comments[id]?.map((comment) => (
                <div className="comment-card" key={comment.id}>
                  <div className="comment-user-date">
                    <NavLink
                      to={`/profile/${comment.User.id}`}
                      className="comment-user-img"
                    >
                      <img
                        src={comment.User.image_url}
                        className="comment-img"
                      ></img>
                    </NavLink>
                    <NavLink
                      to={`/profile/${comment.User.id}`}
                      className="comment-user"
                    >
                      {comment.User.username}
                    </NavLink>
                    <div className="comment-date">
                      {dateChange(comment.updatedAt)}
                    </div>
                  </div>
                  <div className="comment-comment">
                    <div
                      className={`comment-comment-text comment${comment.id}`}
                    >
                      {comment.comment}
                    </div>
                    <div className={`hidden input${comment.id}`}>
                      <textarea
                        className={`comment-textarea`}
                        value={comm}
                        onChange={(e) => setComm(e.target.value)}
                        autoComplete="false"
                        spellCheck="false"
                      />
                      <button
                        className="comment-edit-submit"
                        onClick={() => submitEdit(comment.id)}
                      >
                        Submit
                      </button>
                      <button
                        className="comment-edit-cancel"
                        onClick={() => editComments(comment.id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  {comment.user_id === loggedUser?.id ? (
                    <div className="comment-buttons">
                    <div className="comment-buttons-div">
                      <button
                        className="comment-edit button"
                        onClick={() => editComments(comment.id)}
                        onMouseDown={() => setComm(comment.comment)}
                      >
                        Edit
                      </button>
                      <button
                        className="comment-delete button"
                        onClick={() => delComm(comment.id)}
                      >
                        Delete
                      </button>
                    </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="gundam-info-right">
            <a className="gundam-link" href={gundam?.link} target="_blank">
              Get It
            </a>
            <button onClick={upvote} type="button" className="gundam-upvotes">
              Upvotes: {gundam.upvotes}
            </button>
            {gundam?.user_id === loggedUser?.id ? (
              <>
                <SettingsModal gundam={gundam} />
                <DeleteGundamModal gundam={gundam} />
              </>
            ) : (
              <div>
                <p className="gundam-submitted">Posted by</p>
                <NavLink
                  className="gundam-img-submit"
                  to={`/profile/${gundam.user_id}`}
                >
                  <img className="gundam-user-img" src={user?.image_url} />
                  {user?.username}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Gundam;
