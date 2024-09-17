const Dashboard = ({ userType }) => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">{userType === 'employer' ? 'Employer Dashboard' : 'Job Seeker Dashboard'}</h2>
        {/* Dashboard functionality here */}
      </div>
    );
  };
  
  export default Dashboard;
  