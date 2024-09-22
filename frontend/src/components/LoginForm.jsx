import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { login } from '../services/authService';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';




const LoginForm = () => {

  const key = import.meta.env.VITE_RECAPTCHA_KEY;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();
    
    if(token) {
      try {
        signInWithEmailAndPassword(auth,email,password)
        // await login(email, password);
        alert('Login successful!');
        window.location="/Profile";
      } catch (error) {
        alert('Login failed: ' + error.message);
      }
    } else {
      alert('Please complete the reCAPTCHA');
    }
  };


  return (
    <>
    <div className="h-full mb-16 flex items-center justify-center bg-backgroundBlue">

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={key}
          className="mt-4"
        />

        <button 
          type="submit" 
          className="w-full mt-6 bg-Authbutton text-white py-3 rounded-lg hover:bg-blue-950 transition duration-300">
          Login
        </button>
      </form>
    </div>
    </>
  );  
};

export default LoginForm;