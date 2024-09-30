import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa"; // Icons for mobile menu and profile
import { onAuthStateChanged, signOut } from "firebase/auth"; // Firebase functions for auth
import { auth } from "../services/firebase"; // Firebase authentication service

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // State to track authenticated user
  const [darkMode, setDarkMode] = useState(false);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (darkMode) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the authenticated user
    });

    // Cleanup on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle logout functionality
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null); // Clear the user state after logging out
    setMobileMenuOpen(false); // Close the mobile menu after logout
    navigate('/'); // Redirect to home page
  };

  return (
    <header className="bg-gray-800 p-4 text-white relative">
      <nav className="flex justify-between items-center">
        <div>
          <NavLink to="/" className="text-xl font-bold">
            Job Portal
          </NavLink>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden z-10"
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? null : <FaBars size={24} />}
        </button>

        {/* Navigation Links - hidden on mobile unless toggled */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:w-auto lg:flex lg:space-x-4 transition-all ease-in-out duration-300`}
        >
          {/* Close icon for mobile view */}
          {isMobileMenuOpen && (
            <button
              className="absolute top-4 right-4"
              onClick={toggleMobileMenu}
              aria-label="Close Navigation"
            >
              <FaTimes size={24} />
            </button>
          )}
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-2 lg:space-y-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  (isActive ? "font-bold" : "") + " block px-4 py-2"
                }
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  (isActive ? "font-bold" : "") + " block px-4 py-2"
                }
                aria-current={
                  location.pathname === "/about" ? "page" : undefined
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  (isActive ? "font-bold" : "") + " block px-4 py-2"
                }
                aria-current={
                  location.pathname === "/contact" ? "page" : undefined
                }
              >
                Contact Us
              </NavLink>
            </li>



            {/* Conditionally render Login/Register or Profile/Logout based on authentication status */}
            {!user ? (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      (isActive ? "font-bold" : "") + " block px-4 py-2"
                    }
                    aria-current={
                      location.pathname === "/login" ? "page" : undefined
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      (isActive ? "font-bold" : "") + " block px-4 py-2"
                    }
                    aria-current={
                      location.pathname === "/register" ? "page" : undefined
                    }
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={toggleDarkMode}
                    className="bg-backgroundBlue dark:bg-white text-white dark:text-black px-4 py-2 rounded-full focus:outline-none"
                  >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className="px-4 py-2 flex items-center"
                    aria-label="User Profile"
                  >
                    <FaUserCircle className="mr-2" size={24} />
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-white"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};





export default Header;
