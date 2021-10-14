import { useEffect } from "react";
import { searchFiveGundams, searchFiveUsers } from "../../store/search";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Search = ({query}) => {
    const dispatch = useDispatch()

    const gundams = useSelector(state => state.search.gundams.gundams)
    const users = useSelector(state => state.search.users.users)

    useEffect(() => {
        dispatch(searchFiveGundams(query))
        dispatch(searchFiveUsers(query))
    }, [])

    return (
        <div className="profile-bottom">
            <div className="profile-bottom-left">
                <div className="profile-upvotes">Users ({users?.length})</div>
                <div className="profile-activity">
                    {users && users.map(user => (
                          <NavLink
                          to={`/profile/${user.id}`}
                          className="activity-card"
                        >
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
    )
}

export default Search;
