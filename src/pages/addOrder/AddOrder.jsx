import React, { useState } from "react";
import buttonsData from "./data";

const AddOrder = () => {
  const [selectedComponent, setSelectedComponent] = useState(
    buttonsData[0].component
  );
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (button, index) => {
    setSelectedComponent(button.component);
    setSelectedButtonIndex(index);
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-3xl font-bold mb-4 font-opensans">Add Order</h2>

      <div className="flex px-2 py-3">
        {buttonsData.map((button, index) => (
          <button
            key={index}
            className={`${
              selectedButtonIndex === index
                ? "bg-gradient-to-r from-green-400 to-green-700"
                : "bg-gradient-to-r from-blue-400 to-blue-900"
            } focus:outline-none text-white font-opensans font-bold py-3 px-6 rounded-full mr-4 transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg`}
            onClick={() => handleButtonClick(button, index)} >
            
            {button.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <hr className="border-t-4 border-transparent" />
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-gray-400 to-gray-500" />
      </div>

      {selectedComponent}
    </div>
    
  );
};

export default AddOrder;
