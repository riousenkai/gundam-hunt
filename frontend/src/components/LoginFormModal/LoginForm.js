import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginFormModal.css";
import { useShowModal } from "../../context/ShowModal"

function LoginForm() {
  const { setShowModal, setNum } = useShowModal();
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demo = (e) => {
    e.preventDefault();
    setCredential("Demo-lition");
    setPassword("password");
    return dispatch(sessionActions.login("Demo-lition", "password"));
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul className="error-login">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="login-header">Log in to Gundam Hunt</label>
      <label className="username">Username</label>
      <input
        className="login-input"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <label className="password">Password</label>
      <input
        className="login-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="flex">
      <button className="submit-login" type="submit">
        Log In
      </button>
      <button onMouseDown={demo} className="demo">
        Demo User
      </button>
      </div>
    </form>
  );
}

export default LoginForm;
