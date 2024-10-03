// Profile.jsx

import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase'; // Firebase authentication and Firestore
import { doc, getDoc } from 'firebase/firestore'; // Firestore functions




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
            <span className="font-semibold">Name:</span> {userDetails.name}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">Email:</span> {userDetails.email}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-semibold">Role:</span> {userDetails.role}
          </p>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Jobs:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {/* Map over the jobs array to display a list of applied jobs */}
              <li>Display list of applied jobs here</li>
            </ul>
          </div>

          {/* <button
            className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button> */}
        </>
      ) : (
        <div class="border shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-300 h-44 w-10"></div> 
          <div class="flex-1 space-y-6 py-1">
      <div class="h-8 bg-slate-300 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-300 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="h-2 bg-slate-300 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
      )}
    </div>
  </div>
);
  
  };
  export default Profile;