import JobList from '../components/JobList';
import { useEffect, useState } from 'react';
import img from '../assets/about-img.png';
import img2 from '../assets/online-review-animate.svg';
import img3 from '../assets/we-are-hiring-animate.svg';
import img4 from '../assets/apply_animate.svg';

const Home = () => {
  const [jobs, setJobs] = useState([]);
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


  useEffect(() => {
    // Fetch jobs from backend
    fetch('/api/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  

  

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'dark' : ''} bg-[#ffffff] dark:bg-backgroundBlue`}>
      
      

      <div className="w-full max-w-5xl bg-transparent p-20">
        
        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          {/* About Text */}
          <div className="max-w-lg text-black dark:text-gray-300 pl-32 pr-10">
            <h1 className="text-6xl font-bold mb-4">Kick-Start your future today</h1>
            <p className="text-lg mb-6">Your dream job awaits...</p>
          </div>
  

          {/* Illustrator */}
          <div className="w-72 h-72 pr-20">
            <img
              src={img} // Add the image path here
              alt="Illustrator"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
  

        {/* Search Bar */}
        <div className="flex items-center mb-8">
          <input
            type="text"
            placeholder="Search Jobs"
            className="flex-grow p-3 pl-8 rounded-l-full bg-gray-200 text-gray-700 dark:bg-white dark:text-gray-300 border-none focus:outline-none"
          />
          <button className="bg-[#27debf] text-white py-3 px-6 rounded-r-full hover:bg-[#3b3b72] transition duration-300">
            Search
          </button>
        </div>

        {/* Job List Component */}
        <JobList jobs={jobs} />
      </div>


      

        <div className='flex flex-col lg:flex-row items-center justify-between mb-12 pt-32 pb-24'>
        <div className="w-96 h-72 pr-8">
        <img src={img2} alt="" />
        </div>
        <div className="max-w-lg text-black dark:text-gray-300 pl-10 pr-10">
            <h1 className="text-4xl font-bold mb-4">Your skills are awarded by our recruiters</h1>
            <p className="text-lg mb-6">Land on your dream job where you are recognized and appriciated!!</p>
          </div>
        </div>


        <div className='flex flex-col lg:flex-row items-center justify-between mb-12 pt-20 pb-24'>
          <div className="max-w-lg text-black dark:text-gray-300 pl-10 pr-10">
            <h1 className="text-4xl font-bold mb-4">Find best candidates for your company</h1>
            <p className="text-lg mb-6">Top rankers apply for job whom you can recruit for your company!!</p>
          </div>
          <div className="w-96 h-72 pr-8">
            <img src={img3} alt="" />
          </div>
        </div>


        <div className='flex flex-col lg:flex-row items-center justify-between mb-12 pt-18 pb-24'>
        <div className="w-96 h-72 pr-8">
        <img src={img4} alt="" />
        </div>
        <div className="max-w-lg text-black dark:text-gray-300 pl-10 pr-10">
            <h1 className="text-4xl font-bold mb-4">Apply to your dream company in a click</h1>
            <p className="text-lg mb-6">We provide the most simplest way to apply to your dream job!!</p>
          </div>
        </div>


        {/* Top Companies Section */}
      <div className="mb-8 mt-20 w-3/5">
          <h2 className="text-backgroundBlue  dark:text-white text-xl mb-4">Top Company</h2>
          <div className="grid grid-cols-5 gap-4 bg-[#3b3b72] p-4 rounded-lg">
            <span className="text-white text-center">Google</span>
            <span className="text-white text-center">Microsoft</span>
            <span className="text-white text-center">Amazon</span>
            <span className="text-white text-center">Meta</span>
            <span className="text-white text-center">Apple</span>
          </div>
        </div>

    </div>
   );
   );
};


export default Home;





// import JobList from '../components/JobList';
// import { useEffect, useState } from 'react';

// const Home = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     // Fetch jobs from backend
//     fetch('/api/jobs')
//       .then(response => response.json())
//       .then(data => setJobs(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Job Listings</h1>
//       <JobList jobs={jobs} />
//     </div>
//   );
// };

// export default Home;
