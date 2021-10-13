import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { useShowModal } from '../../context/ShowModal'
import EditGundam from './EditGundam';

function SettingsModal() {
  const { setShowModal, num, setNum } = useShowModal()

  const opener = () => {
    setNum(-1)
    setShowModal(true)
  }

  const closer = () => {
    setNum(0)
    setShowModal(false)
  }

  return (
    <>
      <button onClick={opener} className="gundam-edit-btn" id="edit-button">Edit</button>
      {num === -1 && (
        <Modal onClose={closer}>
          <EditGundam />
        </Modal>
      )}
    </>
  );
}

export default SettingsModal;
