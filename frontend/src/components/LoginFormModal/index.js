import React from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { useShowModal } from '../../context/ShowModal'

function LoginFormModal() {
  const { setShowModal, num, setNum } = useShowModal()

  const opener = () => {
    setNum(2)
    setShowModal(true)
  }

  const closer = () => {
    setShowModal(false)
    setNum(0)
  }

  return (
    <>
      <button onClick={opener} className="gundam-dropbtn gundam-dropdown pointer" id="login-button">Log In</button>
      {num === 2 && (
        <Modal onClose={closer}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
