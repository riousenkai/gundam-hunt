import { useEffect, useState, useRef } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { singleGundam } from "../../store/gundam";
import { useShowModal } from "../../context/ShowModal";
import { NavLink } from "react-router-dom";
import { retrieveUser } from "../../store/user";
import { getComments, editComment } from "../../store/comments";
import "./Gundam.css";
import Loading from "../Loading/Loading";
import SettingsModal from "../SettingsModal";
import DeleteGundamModal from "../DeleteGundamModal";

const Gundam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const gundam = useSelector((state) => state.gundam[id]);
  const comments = useSelector((state) => state.comments);
  const [loaded, setLoaded] = useState(false);
  const [source, setSource] = useState("");
  const [comm, setComm] = useState("");
  const { setShowModal, setNum } = useShowModal();

  const user = useSelector((state) => state.user.user);
  const loggedUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(singleGundam(id));
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
    if (com.classList.contains("hidden")) {
      com.classList.remove("hidden");
      input.classList.add("hidden");
    } else {
      com.classList.add("hidden");
      input.classList.remove("hidden");
    }
  };

  const submitEdit = (num) => {
    if (comm.length < 1) {
      return window.alert('Please place a comment!')
    }

    const payload = {
      comment: comm,
    };
    dispatch(editComment(payload, num)).then(() => editComments(num))
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
                        <button
                          className="comment-edit button"
                          onClick={() => editComments(comment.id)}
                          onMouseDown={() => setComm(comment.comment)}
                        >
                          Edit
                        </button>
                        <button className="comment-delete button">
                          Delete
                        </button>
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
            <button type="button" className="gundam-upvotes">
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
