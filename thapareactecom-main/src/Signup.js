import React, { useState } from 'react';
import { Link,Navigate } from 'react-router-dom';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // Corrected setter name
  const [confirmpassword, setConfirmPassword] = useState(''); // Corrected setter name

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show alert
    alert('Signed up successfully!');
    // Call the onSignup function with username, password, email, and confirmpassword
    onSignup(username, password, email, confirmpassword);
    setUsername('');
    setPassword('');
    setEmail(''); // Reset email state
    setConfirmPassword(''); // Reset confirmpassword state
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Corrected setter function
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Corrected setter function
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Signup;
