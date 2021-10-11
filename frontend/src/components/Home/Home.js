import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getGundams } from "../../store/gundam";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const gundams = useSelector((state) => state.gundam.gundams);

  useEffect(() => {
    dispatch(getGundams()).then(setLoaded(true));
  }, []);

  if (loaded) {
    return (
      <div className="body">
        <div className="body-container">
          <div className="card-container">
            <div>
              <p className="title-text">Gundam Models</p>
              <p className="sort pop">Popular</p>
              <p className="sort">Newest</p>
            </div>
            <div className="head-card">
              {gundams &&
                gundams.map((gundam) => (
                  <NavLink to="/" className="activity-card">
                    <img className="activity-img" src={gundam.image1} />
                    <div className="activity-card-text">
                      <p className="activity-title">{gundam.name}</p>
                      <p className="activity-description">{gundam.grade}</p>
                    </div>
                    <button
                      type="button"
                      className="activity-upvote"
                      onClick={(e) => e.preventDefault()}
                    >
                      {gundam.upvotes}
                    </button>
                  </NavLink>
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
