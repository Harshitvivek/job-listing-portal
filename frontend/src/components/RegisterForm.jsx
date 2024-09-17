import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { register } from '../services/authService';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();
    
    if (token) {
      try {
        await register(email, password);
        alert('Registration successful!');
      } catch (error) {
        alert('Registration failed: ' + error.message);
      }
    } else {
      alert('Please complete the reCAPTCHA');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="block mt-4 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="block mt-4 p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        className="mt-4"
      />
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
