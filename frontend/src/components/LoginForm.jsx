import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase'; // Firebase auth instance
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom'; // For redirecting after login

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = React.createRef();
  const navigate = useNavigate();
  const key = import.meta.env.VITE_RECAPTCHA_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();

    if (token) {
      try {
        // Sign in the user with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Clear form fields after login
        setEmail('');
        setPassword('');

        // Redirect to the profile page
        toast.success('Login successful', { position: "top-center" });
        navigate('/profile');
      } catch (error) {
        toast.error('Login failed: ' + error.message, { position: "bottom-center" });
      }
    } else {
      alert('Please complete the reCAPTCHA');
    }
  };

  return (
    <div className="h-full mb-0 flex items-center justify-center bg-backgroundBlue pt-16 pb-48">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={key}
          className="mt-4"
        />

        <button type="submit" className="w-full mt-6 bg-Authbutton p-10 text-white py-3 rounded-lg hover:bg-blue-950 transition duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
