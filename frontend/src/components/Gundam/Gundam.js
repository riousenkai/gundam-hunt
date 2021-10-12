import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { singleGundam } from "../../store/gundam";
import Loading from "../Loading/Loading";
import "./Gundam.css";

const Gundam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const gundam = useSelector((state) => state.gundam.gundam);

  useEffect(() => {
    dispatch(singleGundam(id)).then(() => setLoaded(true));
  }, [id, dispatch]);

  if (loaded) {
    return (
      <div className="gundam-main">
        <div className="gundam-title">
          <p className="gundam-title-text">{gundam.name}</p>
          <p className="gundam-title-grade">{gundam.grade}</p>
        </div>
        <div className="gundam-info-main">
            <div className="gundam-left">
                <div className="gundam-left-info">
                    <div className="gundam-img">
                        <img className="gundam-highlight-img" src={gundam.image1} />
                        <div className="gundam-mini-img-card">
                            <img className="gundam-mini-img" src={gundam.image1}></img>
                            <img className="gundam-mini-img" src={gundam.image2}></img>
                            <img className="gundam-mini-img" src={gundam.image3}></img>
                        </div>
                    </div>
                </div>
                <div className="gundam-left-comments">

                </div>
            </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Gundam;
