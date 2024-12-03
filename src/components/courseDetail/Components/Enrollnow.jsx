import React from 'react';

const Enrollnow = ({ padding = 'px-4 py-2', textSize = 'text-lg' }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-center ${padding} sm:${padding} rounded-sm cursor-pointer`}
        style={{
          position: 'relative',
          backgroundColor: "#ED1C24",
          background: "linear-gradient(145deg, #F79C42, #ED1C24)", // Gradient for base 3D effect
          boxShadow: "inset 0 0 50px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.2)", // Soft shadow for depth
          borderRadius: "5px",
          overflow: 'hidden',
        }}
      >
        <p className={`text-slate-100 ${textSize} sm:text-lg`}>Enroll Now</p>
      </div>
    </div>
  );
}

export default Enrollnow;
