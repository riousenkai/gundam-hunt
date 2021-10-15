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

  useEffect(() => {
    dispatch(searchAllGundams(results));
    dispatch(searchAllUsers(results)).then(() => setLoaded(true));
    setResults("");
  }, []);

  if (loaded) {
    return (
      <div className="profile-bottom">
        <div className="profile-bottom-left">
          <div className="search-users">
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
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Search;
