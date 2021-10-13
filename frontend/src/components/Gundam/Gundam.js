import { useEffect, useState, useRef } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { singleGundam } from "../../store/gundam";
import { useShowModal } from "../../context/ShowModal";
import { NavLink } from "react-router-dom";
import { retrieveUser } from "../../store/user";
import { getComments } from "../../store/comments";
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

  useEffect(() => {}, [gundam]);

  if (loaded) {
    return (
      <div className="gundam-main">
        {console.log(Array.isArray(comments[id]))}
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
                  <div key={comment.id}>{comment.comment}</div>
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
