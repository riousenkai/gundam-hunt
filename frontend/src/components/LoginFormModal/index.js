import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    const loginBtn = document.getElementById('login-button')
    if (showModal === true) {
      loginBtn.disabled = true;
    } else {
      loginBtn.disabled = false;
    }
  }, [showModal])


  return (
    <>
      <button onClick={() => setShowModal(true)} className="gundam-dropbtn gundam-dropdown pointer nav-right" id="login-button">Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
