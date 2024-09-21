import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { register } from '../services/authService';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const recaptchaRef = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    recaptchaRef.current.reset();
    
    if (token) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        if(user){
            await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                Name: name
            });
        }
        alert("User registered successfully");
        toast.success("User registerd Successfully",{
            position:"top-center",
        }); 
      } catch (error) {
        alert(error.message);
        toast.error(error.message,{
            position:"bottom-center",
        });
      }
    } else {
      alert('Please complete the reCAPTCHA');
    }
  };

  return (
    <div className="h-full mb-0 flex items-center justify-center bg-backgroundBlue">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h2>
        
        <input
          type="name"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
  
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcmS0kqAAAAAPyPd_VtHXhboLJUYbcfMFZUhJKZ"
          className="mt-4"
        />
  
        <button type="submit" className="w-full mt-6 bg-Authbutton p-10 text-white py-3 rounded-lg hover:bg-blue-950 transition duration-300">
          Register
        </button>
      </form>
    </div>
  );
  
};

export default RegisterForm;
