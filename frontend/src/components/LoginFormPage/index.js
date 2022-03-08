import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [demo, setDemo] = useState('');


  useEffect(() => {
     dispatch(sessionActions.login({ credential, password }))

    }, [demo])

    if (sessionUser) return (
      <Redirect to="/" />
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }
  const demoSubmit = (e) => {
    e.preventDefault();
    setCredential('visiting@ghost.com')
    setPassword('password')
    setDemo('login')
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-or-signup-title">
        <label>
          Log in or sign up
        </label>
      </div>

      <label className="welcome-line">
          Welcome to Nightmarebnb
      </label>

      <input className="login-input"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
        placeholder="  Email"
        />

      <input className="login-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="  Password"
        />
      <button className="login-btn" type="submit">Log In</button>
      <br/>
      <button className="login-btn" onClick={demoSubmit}>Demo Log In</button>

      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>

    </form>
  );
}

export default LoginFormPage;
