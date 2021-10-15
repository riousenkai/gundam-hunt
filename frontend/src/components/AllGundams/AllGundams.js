import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useShowModal } from "../../context/ShowModal";
import {
  getGundams,
  getPopularGundams,
  createGundamUpvote,
} from "../../store/gundam";
import Loading from "../Loading/Loading";
import "./AllGundams.css";

const AllGundams = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const gundams = useSelector((state) => state.gundam.gundams);
  const { setPop, setNum, pop } = useShowModal();

  const [loaded, setLoaded] = useState(false);
  const [high, setHigh] = useState(true);
  const [real, setReal] = useState(true);
  const [master, setMaster] = useState(true);
  const [perfect, setPerfect] = useState(true);
  const [deformed, setDeformed] = useState(true);

  useEffect(() => {
    dispatch(getGundams()).then(() => setLoaded(true));
  }, [dispatch]);

  const newest = () => {
    const popular = document.querySelector(".sort.pop");
    const newest = document.querySelector(".sort.newest");
    newest.classList.add("underline");
    popular.classList.remove("underline");
    setPop(false);
    dispatch(getGundams());
  };

  const popular = () => {
    const popular = document.querySelector(".sort.pop");
    const newest = document.querySelector(".sort.newest");
    popular.classList.add("underline");
    newest.classList.remove("underline");
    setPop(true);
    dispatch(getPopularGundams());
  };

  useEffect(() => {
    if (!high) {
      document.querySelectorAll(".High")?.forEach((gun) => {
        gun.classList.add("hidden");
      });
    } else if (high) {
      document.querySelectorAll(".High")?.forEach((gun) => {
        gun.classList.remove("hidden");
      });
    }

    if (!real) {
      document.querySelectorAll(".Real")?.forEach((gun) => {
        gun.classList.add("hidden");
      });
    } else if (real) {
      document.querySelectorAll(".Real")?.forEach((gun) => {
        gun.classList.remove("hidden");
      });
    }

    if (!master) {
      document.querySelectorAll(".Master")?.forEach((gun) => {
        gun.classList.add("hidden");
      });
    } else if (master) {
      document.querySelectorAll(".Master")?.forEach((gun) => {
        gun.classList.remove("hidden");
      });
    }

    if (!perfect) {
      document.querySelectorAll(".Perfect")?.forEach((gun) => {
        gun.classList.add("hidden");
      });
    } else if (perfect) {
      document.querySelectorAll(".Perfect")?.forEach((gun) => {
        gun.classList.remove("hidden");
      });
    }

    if (!deformed) {
      document.querySelectorAll(".Super")?.forEach((gun) => {
        gun.classList.add("hidden");
      });
    } else if (deformed) {
      document.querySelectorAll(".Super")?.forEach((gun) => {
        gun.classList.remove("hidden");
      });
    }
  }, [high, perfect, real, master, deformed, gundams]);

  const upvote = (e, gundamId) => {
    e.preventDefault();

    if (!user) {
      return setNum(2);
    }

    dispatch(createGundamUpvote(user.id, gundamId, { gundam: "test" })).then(
      () => {
        if (!pop) {
          dispatch(getGundams());
        } else {
          dispatch(getPopularGundams());
        }
      }
    );
  };

  if (loaded) {
    return (
      <div className="body">
        <div className="body-container">
          <div className="card-container">
            <div>
              <p className="title-text">All Gundam Models</p>
              <p className="sort pop" onClick={popular}>
                Popular
              </p>
              <p className="sort newest underline" onClick={newest}>
                Newest
              </p>
            </div>
            <div className="head-card">
              {gundams &&
                gundams.map((gundam) => (
                  <NavLink
                    to={`/gundams/${gundam.id}`}
                    className={`activity-card ${gundam.grade.split(" ")[0]}`}
                  >
                    <img className="activity-img" src={gundam.image1} />
                    <div className="activity-card-text">
                      <p className="activity-title">{gundam.name}</p>
                      <p className="activity-description">{gundam.grade}</p>
                    </div>
                    <button
                      type="button"
                      className="activity-upvote"
                      onClick={(e) => upvote(e, gundam.id)}
                    >
                      {gundam.upvotes}
                    </button>
                  </NavLink>
                ))}
            </div>
          </div>
          <div className="profile-bottom-right">
            <div className="search-filter all">
              <div className="gundams-sort">Sort by Grade</div>
              <div className="users-joined">
                <input
                  checked={high}
                  onChange={() => setHigh(!high)}
                  type="checkbox"
                  className="search-checkbox"
                />
                High Grade
              </div>
              <div className="users-joined">
                <input
                  checked={real}
                  onChange={() => setReal(!real)}
                  type="checkbox"
                  className="search-checkbox"
                />
                Real Grade
              </div>
              <div className="users-joined">
                <input
                  checked={master}
                  onChange={() => setMaster(!master)}
                  type="checkbox"
                  className="search-checkbox"
                />
                Master Grade
              </div>
              <div className="users-joined">
                <input
                  checked={perfect}
                  onChange={() => setPerfect(!perfect)}
                  type="checkbox"
                  className="search-checkbox"
                />
                Perfect Grade
              </div>
              <div className="users-joined">
                <input
                  checked={deformed}
                  onChange={() => setDeformed(!deformed)}
                  type="checkbox"
                  className="search-checkbox"
                />
                Super Deformed
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default AllGundams;
