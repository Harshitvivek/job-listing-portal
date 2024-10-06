import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import growth from '../assets/growth-icon.webp';
import edit from '../assets/edit-doc.webp';
import map from '../assets/map-icon.webp';

const CardSection = () => {

  return (
    <section className="py-12 bg-gray-50 dark:bg-backgroundBlue">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Zoom duration={500}>
          <div  className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col items-center" >
            <img src={edit} alt="img" className="w-[60%] h-48 object-cover"/>
            <div className="p-6">
                <p className="text-gray-700 text-center">Update your profile whenever needed</p>
              </div>
          </div>
        </Zoom>
        <Zoom duration={500}>
          <div  className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col items-center" >
            <img src={growth} alt="img" className="w-[60%] h-48 object-cover"/>
            <div className="p-6">
                <p className="text-gray-700 text-center">Unlock numerous growth opportunities</p>
              </div>
          </div>
        </Zoom>
        <Zoom duration={500}>
          <div  className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col items-center" >
            <img src={map} alt="img" className="w-[60%] h-48 object-cover"/>
            <div className="p-6">
                <p className="text-gray-700 text-center">Find Jobs nearby your location</p>
              </div>
          </div>
          </Zoom>


        </div>
      </div>
    </section>
  );
};

export default CardSection;
