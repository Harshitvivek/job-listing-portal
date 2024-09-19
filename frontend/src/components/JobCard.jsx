const JobCard = ({ job }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">{job.title}</h3>
        <p>{job.description}</p>
        <p>Salary: ${job.salary}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
      </div>
    );
  };
  
  export default JobCard;
  