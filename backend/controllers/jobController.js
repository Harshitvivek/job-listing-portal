import Job from '../models/Job.js';

// Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new job
export const createJob = async (req, res) => {
  const { title, description, salary } = req.body;

  try {
    const job = await Job.create({ title, description, salary, postedBy: req.userId });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
