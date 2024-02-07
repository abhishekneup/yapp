import React from 'react';


const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm bg-slate-500 rounded overflow-hidden shadow-lg flex justify-between">
      {imageUrl && (
        <img className="w-full"  alt="Card" />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Name:</div>
        <p className="text-gray-700 text-base">My age is </p>
      </div>
    </div>
  );
};

export default Card;
