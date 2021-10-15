import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getGundams, getPopularGundams } from "../../store/gundam";
import GundamModal from "../GundamModal";
import Loading from "../Loading/Loading";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const gundams = useSelector((state) => state.gundam.gundams);

  useEffect(() => {
    dispatch(getGundams()).then(setLoaded(true));
  }, []);

  const popular = () => {
    const popular = document.querySelector(".sort.pop");
    const newest = document.querySelector(".sort.newest");
    popular.classList.add("underline");
    newest.classList.remove("underline");
    dispatch(getPopularGundams());
  };

  const newest = () => {
    const popular = document.querySelector(".sort.pop");
    const newest = document.querySelector(".sort.newest");
    newest.classList.add("underline");
    popular.classList.remove("underline");
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
                gundams.slice(0, 10).map((gundam) => (
                  <GundamModal key={gundam.id} gundam={gundam} />
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
                ))}
              <div className="last-card">Show more...</div>
            </div>
          </div>
          <div className="side-container">
            <p className="title-text">Upcoming Products</p>
            <div className="upcoming-container">
              <div className="side-card">Product#1</div>
              <div className="side-card">Product#2</div>
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
