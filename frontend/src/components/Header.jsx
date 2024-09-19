import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="flex justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">Job Portal</Link>
        </div>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register" className="mr-4">Register</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
