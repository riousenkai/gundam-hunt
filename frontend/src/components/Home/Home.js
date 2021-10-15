import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getGundams, getPopularGundams } from "../../store/gundam";
import { useShowModal } from "../../context/ShowModal";
import { useHistory } from "react-router";
import { getAllComments } from "../../store/comments";
import GundamModal from "../GundamModal";
import Loading from "../Loading/Loading";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const { setPop } = useShowModal();
  const gundams = useSelector((state) => state.gundam.gundams);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(getGundams())
      .then(() => dispatch(getAllComments()))
      .then(setLoaded(true));
  }, [dispatch]);

  const popular = () => {
    const popular = document.querySelector(".sort.pop");
    const newest = document.querySelector(".sort.newest");
    popular.classList.add("underline");
    newest.classList.remove("underline");
    setPop(true);
    dispatch(getPopularGundams());
  };

  const newest = () => {
    const popular = document.querySelector(".sort.pop");
    const newest = document.querySelector(".sort.newest");
    newest.classList.add("underline");
    popular.classList.remove("underline");
    setPop(false);
    dispatch(getGundams());
  };

  if (loaded) {
    return (
      <div className="body">
        <div className="body-container">
          <div className="card-container">
            <div>
              <p className="title-text">Gundam Models</p>
              <p className="sort pop" onClick={popular}>
                Popular
              </p>
              <p className="sort newest underline" onClick={newest}>
                Newest
              </p>
            </div>
            <div className="head-card">
              {gundams &&
                gundams
                  .slice(0, 10)
                  .map((gundam) => (
                    <GundamModal key={gundam.id} gundam={gundam} />
                  ))}
              <div
                className="last-card"
                onClick={() => history.push("/gundams")}
              >
                Show {gundams?.length - 10} More
              </div>
            </div>
          </div>
          <div className="side-container home">
            <p className="title-text">Upcoming Products</p>
            <div className="upcoming-container">
              <a
                href="https://p-bandai.com/us/item/N2613234001001"
                target="_blank"
                className="side-card"
                rel="noreferrer"
              >
                <img
                  alt="Missing Image"
                  className="upcoming-img"
                  src="https://sneakerbardetroit.com/wp-content/uploads/2021/07/Gundam-Unicorn-Nike-SB.jpg"
                />
                <div className="upcoming-details">
                  <p className="upcoming-text">
                    RX-0 Unicorn Gundam Ver. Nike SB
                  </p>
                  <p className="upcoming-grade">Super Deformed (SD)</p>
                </div>
              </a>
              <a
                href="https://p-bandai.com/us/item/N2613235001001"
                target="_blank"
                className="side-card"
                rel="noreferrer"
              >
                <img
                  alt="Missing Image"
                  className="upcoming-img"
                  src="https://p-bandai.com/img/us/p/m/N2613235001001_001.jpg"
                />
                <div className="upcoming-details">
                  <p className="upcoming-text">
                    RX-0 Unicorn Gundam 02 Banshee Ver. Nike SB
                  </p>
                  <p className="upcoming-grade">Super Deformed (SD)</p>
                </div>
              </a>
            </div>
            <p className="profile-comments-title text">Recent Comments</p>
            <div className="profile-comment-container">
              {comments?.slice(0, 5).map((comment) => (
                <div className="profile-comment-card text">
                  <NavLink
                    to={`/gundams/${comment.gundam_id}`}
                    className="profile-comment-nav"
                  >
                    <p className="profile-comment home-text">
                      {comment.comment.slice(0, 30)}
                      {comment.comment.length > 30 && "..."}
                    </p>
                    <p className="profile-comment-source home-text">
                      <img
                        className="profile-img-home"
                        src={comment.User?.image_url}
                      />
                      {comment.User?.username.slice(0, 40)}
                      {comment.User?.username.length > 40 && "..."}
                    </p>
                    <p className="profile-comment-source home-text">
                      on {comment.Gundam?.name.slice(0, 40)}
                      {comment.Gundam?.name.length > 40 && "..."}
                    </p>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Home;

// <NavLink to="/" className="activity-card">
//   <img className="activity-img" src={gundam.image1} />
//   <div className="activity-card-text">
//     <p className="activity-title">{gundam.name}</p>
//     <p className="activity-description">{gundam.grade}</p>
//   </div>
//   <button
//     type="button"
//     className="activity-upvote"
//     onClick={(e) => e.preventDefault()}
//   >
//     {gundam.upvotes}
//   </button>
// </NavLink>
