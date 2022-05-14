import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-title">
        <label>
          Sign up
        </label>
      </div>

      <input className="signup-input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        />

      <input className="signup-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        placeholder="Username"
        />

      <input className="signup-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
      />

      <input className="signup-input"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        placeholder="Confirm Password"
      />

      <button className="signup-btn" type="submit">Sign Up</button>

      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    </form>
  );
}

export default SignupFormPage;
