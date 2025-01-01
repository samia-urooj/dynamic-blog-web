import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col items-center text-center">
        <img src="/image/intro4.jpeg " className="rounded-full mb-4 h-[300px]"></img>
       
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Welcome to our skincare blog, where we share tips, reviews, and advice to help you achieve your healthiest skin. 
          Whether you're looking for natural remedies, product recommendations, or skincare routines, we've got you covered.
        </p>
        <div className="flex justify-center gap-6 text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Our Mission</span>
          <span className="hover:text-gray-700 cursor-pointer">Contact</span>
          <span className="hover:text-gray-700 cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default About;
