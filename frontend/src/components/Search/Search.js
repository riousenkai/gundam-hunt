import { useEffect, useState } from "react";
import { searchAllGundams, searchAllUsers } from "../../store/search";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useShowModal } from "../../context/ShowModal";
import Loading from "../Loading/Loading";

const Search = () => {
  const dispatch = useDispatch();
  const { results, setResults } = useShowModal();

  const gundams = useSelector((state) => state.search.gundamAll);
  const users = useSelector((state) => state.search.userAll);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (results.length > 3) {
      dispatch(searchAllGundams(results));
      dispatch(searchAllUsers(results)).then(() => setLoaded(true));
    } else {
      setLoaded(true);
    }
    setResults("");
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();

    if (search.length < 3) {
      return window.alert("Please enter three or more characters!");
    }

    dispatch(searchAllGundams(search));
    dispatch(searchAllUsers(search));
  };

  if (loaded) {
    return (
      <div className="profile-bottom">
        <div className="profile-bottom-left">
          <div className="search-users">
            <p className="search-title">Search</p>
            <form onSubmit={(e) => submitSearch(e)}>
              <input
                className="submit-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            <div className="profile-upvotes">
              Users ({users?.length ? users.length : 0})
            </div>
            <div className="profile-activity">
              {users &&
                users.map((user) => (
                  <NavLink to={`/profile/${user.id}`} className="activity-card">
                    <img className="activity-img" src={user.image_url} />
                    <div className="activity-card-text">
                      <p className="activity-title">{user.username}</p>
                      <p className="activity-description">{user.description}</p>
                    </div>
                  </NavLink>
                ))}
            </div>
            <div className="profile-upvotes">
              Gundams ({gundams?.length ? gundams.length : 0})
            </div>
            <div className="profile-activity">
              {gundams &&
                gundams.map((gundam) => (
                  <NavLink
                    to={`/profile/${gundam.id}`}
                    className="activity-card"
                  >
                    <img className="activity-img" src={gundam.image1} />
                    <div className="activity-card-text">
                      <p className="activity-title">{gundam.name}</p>
                      <p className="activity-description">{gundam.grade}</p>
                    </div>
                  </NavLink>
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

export default Search;
