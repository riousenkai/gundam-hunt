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
              <a href="https://p-bandai.com/us/item/N2613234001001" target="_blank" className="side-card">
                <img
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
              <a href="https://p-bandai.com/us/item/N2613235001001" target="_blank" className="side-card">
                <img
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
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
