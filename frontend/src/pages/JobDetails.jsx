import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`/api/jobs/${jobId}`)
      .then(response => response.json())
      .then(data => setJob(data))
      .catch(err => console.error(err));
  }, [jobId]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.description}</p>
      <p>Salary: ${job.salary}</p>
    </div>
  );
};

export default JobDetails;
