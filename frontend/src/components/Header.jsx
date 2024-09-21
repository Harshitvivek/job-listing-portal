import { Link, useLocation  } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  // Check if the current route is '/login' or '/register'
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';


  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };


  return (
    <header className=" bg-backgroundBlue p-4 text-white">
      <nav className="flex justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">Job Portal</Link>
        </div>
        {!isAuthPage && (
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register" className="mr-4">Register</Link>
          {/* <Link to="/profile" className="mr-4">Profile</Link> */}
        
          {/* Toggle Button */}
          
            <button
              onClick={toggleDarkMode}
              className="bg-backgroundBlue dark:bg-white text-white dark:text-black px-4 py-2 rounded-full focus:outline-none"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          
        </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
