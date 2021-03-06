import { useEffect, useState } from "react";
import { searchAllGundams, searchAllUsers } from "../../store/search";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useShowModal } from "../../context/ShowModal";
import { createGundamUpvote } from "../../store/gundam";
import "./Search.css";
import Loading from "../Loading/Loading";

const Search = () => {
  const dispatch = useDispatch();
  const { results, setResults, setNum } = useShowModal();

  const gundams = useSelector((state) => state.search.gundamAll);
  const users = useSelector((state) => state.search.userAll);
  const user = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [userCheck, setUserCheck] = useState(true);
  const [gundamCheck, setGundamCheck] = useState(true);

  useEffect(() => {
    if (results.length >= 1) {
      dispatch(searchAllGundams(results));
      dispatch(searchAllUsers(results)).then(() => setLoaded(true));
    } else {
      dispatch(searchAllGundams("@__@#!!!*(xc!"));
      dispatch(searchAllUsers("@__@#!!!*(!!")).then(() => setLoaded(true));
    }
    setResults("");
    setSearch("");
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();

    if (search.length < 1) {
      return window.alert("Please enter one or more character(s)!");
    }

    dispatch(searchAllGundams(search));
    dispatch(searchAllUsers(search));
  };

  const upvote = (gundamId, e) => {
    e.preventDefault();

    if (!user) {
      return setNum(2);
    }

    dispatch(createGundamUpvote(user.id, gundamId, { gundam: "test" })).then(
      () => dispatch(searchAllGundams(search))
    );
  };

  useEffect(() => {
    if (!userCheck) {
      document.querySelector(".search-users")?.classList.add("hidden");
    } else if (userCheck) {
      document.querySelector(".search-users")?.classList.remove("hidden");
    }

    if (!gundamCheck) {
      document.querySelector(".search-gundams")?.classList.add("hidden");
    } else if (gundamCheck) {
      document.querySelector(".search-gundams")?.classList.remove("hidden");
    }
  }, [userCheck, gundamCheck]);

  if (loaded) {
    return (
      <div className="profile-bottom searches">
        <div className="profile-bottom-left">
          <p className="search-title">Search</p>
          <form onSubmit={(e) => submitSearch(e)}>
            <input
              className="submit-input search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
            />
          </form>
          <div className="search-gundams">
            <div className="profile-upvotes">
              Gundams ({gundams?.length ? gundams.length : 0})
            </div>
            <div className="profile-activity">
              {gundams &&
                gundams.map((gundam) => (
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
          <div className="search-users">
            <div className="profile-upvotes">
              Users ({users?.length ? users.length : 0})
            </div>
            <div className="profile-activity">
              {users &&
                users?.map((user) => (
                  <NavLink to={`/profile/${user.id}`} className="activity-card">
                    <img
                      alt="Missing Image"
                      className="activity-img"
                      src={user.image_url}
                    />
                    <div className="activity-card-text">
                      <p className="activity-title">{user.username}</p>
                      <p className="activity-description">{user.description}</p>
                    </div>
                  </NavLink>
                ))}
            </div>
          </div>
        </div>
        <div className="profile-bottom-right">
          <div className="search-filter">
            <div className="users-joined">
              <input
                checked={gundamCheck}
                onChange={() => setGundamCheck(!gundamCheck)}
                type="checkbox"
                className="search-checkbox"
              />
              Gundams
            </div>
            <div className="users-joined">
              <input
                checked={userCheck}
                onChange={() => setUserCheck(!userCheck)}
                type="checkbox"
                className="search-checkbox"
              />
              Users
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Search;
