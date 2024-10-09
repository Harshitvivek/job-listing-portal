import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Auth from './pages/Auth';
import EmployerDashboard from './pages/EmployerDashboard';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import JobDetails from './pages/JobDetails';
import Header from './components/Header';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
