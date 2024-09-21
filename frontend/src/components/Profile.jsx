import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { doc, getDoc} from 'firebase/firestore';



const Profile = () => {
  const [userDetails, setUserDetails] = useState('');

  const fetchUserData=async()=>{
    auth.onAuthStateChanged(async(user)=>{
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      }else{
        console.log("User is not loged in");
      }
    });
  };

  async function handleLogout(){
    try{
      await auth.signOut();
      window.location.href="/login";
      console.log("user logged out successfully");
    }
    catch(error){
      console.error("Error logging out", error.message)
    }
  };
  

  useEffect(()=>{
    fetchUserData()
  },[])


    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
      {userDetails ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Profile</h2>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Name:</span> {userDetails.Name}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">Email:</span> {userDetails.email}
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Jobs:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {/* Map over the jobs array to display a list of applied jobs */}
              <li>Display list of applied jobs here</li>
            </ul>
          </div>

          <button
            className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  </div>
);
  
  };
  export default Profile;
  