import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <button onClick={() => setIsLogin(true)} className="mr-4">Login</button>
        <button onClick={() => setIsLogin(false)}>Register</button>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default Auth;
