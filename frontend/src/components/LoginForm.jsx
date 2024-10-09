import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase'; // Firebase auth instance
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom'; // Added Link for navigation

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('role'); // State to track role selection
  const recaptchaRef = React.createRef();
  const navigate = useNavigate();
  const key = import.meta.env.VITE_RECAPTCHA_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();

    if (token) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user, role); // Role is logged as well

  
        setEmail('');
        setPassword('');
        setRole('role');


        toast.success('Login successful', { position: "top-center" });
        navigate('/profile');
      } catch (error) {
        toast.error('Login failed: ' + error.message, { position: "bottom-center" });
        setEmail('');
        setPassword('');
        setRole('role');
      }
    } else {
      alert('Please complete the reCAPTCHA');
    }
  };

  return (
    <div className="h-full min-h-screen flex items-center justify-center bg-backgroundBlue pt-32 pb-12 px-4 md:px-0">
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

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="role">Role</option>
          <option value="applicant">Applicant</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="h-20 flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={key}
            className="mt-4"
          />
        </div>

        <button type="submit" className="w-full mt-6 bg-Authbutton p-2 text-white py-3 rounded-lg hover:bg-blue-950 transition duration-300">
          Login
        </button>

        {/* Section for register link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/register" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;