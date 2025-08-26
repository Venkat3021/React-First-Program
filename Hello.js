import React, { useState } from 'react';

function Hello(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (email === 'admin@example.com' && password === 'admin123') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <label htmlFor="email">Email</label>
        <input 
          id="email"
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <label htmlFor="password">Password</label>
        <input 
          id="password"
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        <button type="submit" className="login-btn">Login</button>

        {message && <p className="login-message">{message}</p>}
      </form>

      <footer className="login-footer">
        Developed By Venkata Reddy
      </footer>
    </div>
  );
}

export default Hello;
