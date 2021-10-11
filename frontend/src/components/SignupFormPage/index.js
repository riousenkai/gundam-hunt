import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm'
import { useShowModal } from '../../context/ShowModal'

function SignupFormModal() {
  const { setShowModal, num, setNum } = useShowModal()

  const opener = () => {
    setNum(1)
    setShowModal(true)
  }

  const closer = () => {
    setShowModal(false)
    setNum(0)
  }

  return (
    <>
      <button onClick={opener} className="gundam-dropbtn gundam-dropdown pointer">Sign Up</button>
      {(num === 1) && (
        <Modal onClose={closer}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
