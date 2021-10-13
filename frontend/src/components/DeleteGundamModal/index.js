import React from 'react';
import { Modal } from '../../context/Modal';
import { useShowModal } from '../../context/ShowModal'
import DeleteConfirmation from './DeleteConfirmation';

function DeleteGundamModal({gundam}) {
  const { setShowModal, num, setNum } = useShowModal()

  const opener = () => {
    setNum(-2)
    setShowModal(true)
  }

  const closer = () => {
    setShowModal(false)
    setNum(0)
  }

  return (
    <>
      <button onClick={opener} className="gundam-delete-btn">Delete</button>
      {num === -2 && (
        <Modal onClose={closer}>
          <DeleteConfirmation gundam={gundam} />
        </Modal>
      )}
    </>
  );
}

export default DeleteGundamModal;
