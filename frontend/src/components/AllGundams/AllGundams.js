import { useEffect, useState } from "react";
import { getGundams,getPopularGundams } from "../../store/gundam";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const AllGundams = () => {
  const dispatch = useDispatch();

  const gundams = useSelector((state) => state.gundam.gundams);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(getGundams()).then(() => setLoaded(true));
  }, [gundams, dispatch]);

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

  if (loaded) {
    return (
      <>
        <div className="body">
          <div className="body-container">
            <div>
              <p className="title-text">Gundam Models</p>
              <p className="sort pop" onClick={popular}>
                Popular
              </p>
              <p className="sort newest underline" onClick={newest}>
                Newest
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default AllGundams;
