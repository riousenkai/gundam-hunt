import "./GundamShow.css";
import { Link, NavLink } from "react-router-dom";

const GundamShow = ({ gundam }) => {
  return (
    <div className="gundam-modal-head">
       <Link to={`/gundams/${gundam.id}`} className="gundam-modal-top">{gundam.name}</Link>
      <NavLink to={`/gundams/${gundam.id}`}> <img alt="Missing Image" className="gundam-modal-img" src={gundam.image2}></img></NavLink>
      <NavLink to={`/gundams/${gundam.id}`} className="gundam-modal-bot">Visit Product Page</NavLink>
    </div>
  );
};

export default GundamShow;
