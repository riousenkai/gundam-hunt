import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { NavLink } from "react-router-dom";
import GundamShow from "./GundamShow";
import { useShowModal } from "../../context/ShowModal";

function GundamModal({ gundam }) {
  const { showModal, setShowModal, num, setNum } = useShowModal();

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
        <div onClick={opener} className="activity-card">
          <img className="activity-img" src={gundam.image1} />
          <div className="activity-card-text">
            <p className="activity-title">{gundam.name}</p>
            <p className="activity-description">{gundam.grade}</p>
          </div>
        </div>
        <button
          type="button"
          className="activity-upvote"
          onClick={(e) => e.preventDefault()}
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
