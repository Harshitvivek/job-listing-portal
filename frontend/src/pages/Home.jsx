import JobList from '../components/JobList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from backend
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;
