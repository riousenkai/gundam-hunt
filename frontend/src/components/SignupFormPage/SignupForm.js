import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";
import { useShowModal } from "../../context/ShowModal"


function SignupFormPage() {
  const { setShowModal, setNum } = useShowModal();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return await dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    setShowModal(false)
    setNum(0)
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <ul className="errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="signup-label">Email</label>
      <input
        className="signup-input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="signup-label">Username</label>
      <input
        className="signup-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label className="signup-label">Password</label>
      <input
        className="signup-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label className="signup-label">Confirm Password</label>
      <input
        className="signup-input"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit" className="signup-submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupFormPage;
