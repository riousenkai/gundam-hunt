import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginFormModal.css'

function LoginForm() {
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
    setCredential('Demo-lition');
    setPassword('password');
    return dispatch(sessionActions.login('Demo-lition', 'password'))
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="username">
        Username
        <input
          className="login-input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
      <button onMouseDown={demo}>Demo User</button>
    </form>
  );
}

export default LoginForm;
