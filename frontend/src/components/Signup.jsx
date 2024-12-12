import React, { useState } from 'react';
import { signup } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Updated to useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signup({ username, email, password });
      navigate('/login'); // Using navigate to redirect after signup
    } catch (err) {
      setError('Signup failed');
    }
  };

  return (
    <div className="signup-form">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
