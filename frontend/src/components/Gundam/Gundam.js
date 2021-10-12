import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { singleGundam } from "../../store/gundam";
import { useShowModal } from "../../context/ShowModal";
import Loading from "../Loading/Loading";
import "./Gundam.css";

const Gundam = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const gundam = useSelector((state) => state.gundam[id]);
  const [loaded, setLoaded] = useState(false);
  const [source, setSource] = useState("");
  const { setShowModal, setNum } = useShowModal();

  useEffect(() => {
    dispatch(singleGundam(id)).then(() => setLoaded(true));
    setShowModal(false);
    setNum(0);
  }, [id, dispatch]);

  useEffect(() => {
    setSource(gundam?.image1);
  }, [gundam]);

  if (loaded) {
    return (
      <div className="gundam-main">
        <div className="gundam-title">
          <p className="gundam-title-text">{gundam?.name}</p>
          <p className="gundam-title-grade">{gundam?.grade}</p>
        </div>
        <div className="gundam-info-main">
          <div className="gundam-left">
            <div className="gundam-left-info">
              <div className="gundam-img">
                <img
                  className="gundam-highlight-img"
                  id="main-img"
                  src={source}
                />
                <div className="gundam-mini-img-card">
                  <img
                    className="gundam-mini-img"
                    src={gundam?.image1}
                    onClick={() => setSource(gundam?.image1)}
                  ></img>
                  <img
                    className="gundam-mini-img"
                    src={gundam?.image2}
                    onClick={() => setSource(gundam?.image2)}
                  ></img>
                  <img
                    className="gundam-mini-img"
                    src={gundam?.image3}
                    onClick={() => setSource(gundam?.image3)}
                  ></img>
                </div>
              </div>
              <div className="gundam-left-description">
                <p className="gundam-description">{gundam?.description}</p>
              </div>
            </div>
            <div className="gundam-left-comments"></div>
          </div>
          <div className="gundam-info-right">
            <a href={gundam?.link} target="_blank">Get It</a>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Gundam;
