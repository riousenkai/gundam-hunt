import React from "react";
import { Modal } from "../../context/Modal";
import GundamShow from "./GundamShow";
import { useShowModal } from "../../context/ShowModal";
import { useSelector, useDispatch } from "react-redux";
import {
  createGundamUpvote,
  getGundams,
  getPopularGundams,
} from "../../store/gundam";

function GundamModal({ gundam }) {
  const dispatch = useDispatch();

  const { setShowModal, num, setNum, pop } = useShowModal();

  const user = useSelector((state) => state.session.user);

  const upvote = (e) => {
    e.preventDefault();

    if (!user) {
      return setNum(2);
    }

    dispatch(createGundamUpvote(user.id, gundam.id, { gundam: "test" })).then(
      () => {
        if (!pop) {
          dispatch(getGundams());
        } else {
          dispatch(getPopularGundams());
        }
      }
    );
  };

  const opener = () => {
    setNum(+gundam.id + 4);
    setShowModal(true);
  };

  const closer = () => {
    setShowModal(false);
    setNum(0);
  };

  return (
    <>
      <div className="activity-card">
        <img className="activity-img" onClick={opener} src={gundam.image1} alt="Missing Image" />
        <div className="activity-card-text" onClick={opener}>
          <p className="activity-title">{gundam.name}</p>
          <p className="activity-description">{gundam.grade}</p>
        </div>
        <button
          type="button"
          className="activity-upvote"
          onClick={(e) => upvote(e)}
        >
          {gundam.upvotes}
        </button>
      </div>
      {num === +gundam.id + 4 && (
        <Modal onClose={closer} onBlur={closer}>
          <GundamShow gundam={gundam} />
        </Modal>
      )}
    </>
  );
}

export default GundamModal;
