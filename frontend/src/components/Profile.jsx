// Profile.jsx

import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase'; // Firebase authentication and Firestore
import { doc, getDoc } from 'firebase/firestore'; // Firestore functions

const Profile = () => {
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from Firestore
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'Users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!userData) {
    return <div>User data not found.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Your Jobs:</h3>
        {/* Display list of applied jobs here */}
      </div>
    </div>
  );
};

export default Profile;
