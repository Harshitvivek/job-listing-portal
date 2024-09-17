const Profile = ({ user }) => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Your Jobs:</h3>
          Display list of applied jobs here
        </div>
      </div>
    );
  };
  
  export default Profile;
  