import React from "react";

const Card = (props) => {
  return (
    <div className="w-64 rounded-xl shadow-lg overflow-hidden bg-white">
      <img
        src="https://via.placeholder.com/300x180"
        alt="boAt Lunar Discovery"
        className="w-full h-40 object-cover"
      />

      <div className="p-3">
        <div className="flex justify-between items-center text-sm font-semibold mb-1">
          <span className="bg-yellow-400 text-black px-2 py-1 rounded-md">
            {props.objdata.feature}
          </span>
          <span className="bg-yellow-400 px-2 py-1 rounded-md flex items-center">
            ⭐ {props.objdata.rating}
          </span>
        </div>

        <h2 className="text-lg font-semibold mb-2">{props.objdata.title}</h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">{props.objdata.price}</p>
            <p className="text-gray-400 text-sm line-through">{props.objdata.oldPrice}</p>
            <p className="text-green-500 text-sm font-semibold">{props.objdata.discount}</p>
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-600 mr-1"></div>
            <span className="text-sm text-gray-500">+{props.objdata.colors}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
