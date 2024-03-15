import React, { useState, useEffect } from "react";
import ordersideData from "./ordersideData";

const DomesticOrder = () => {
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(0);

  const handleNext = () => {
    setSelectedComponentIndex(
      (prevIndex) => (prevIndex + 1) % ordersideData.length
    );
  };

  const handleBack = () => {
    setSelectedComponentIndex(
      (prevIndex) =>
        (prevIndex - 1 + ordersideData.length) % ordersideData.length
    );
  };

  useEffect(() => {
    setSelectedComponentIndex(0);
  }, []);

  const selectedComponent = ordersideData[selectedComponentIndex].component;
  const selectedTitle = ordersideData[selectedComponentIndex].title;

  const isBackVisible = selectedComponentIndex !== 0;
  const isSubmitVisible = selectedComponentIndex === ordersideData.length - 1;

  return (
    <div className="mt-8 flex flex-col">
      <div className="flex-1 flex">
        <div className="w-[15%] bg-gray-100 p-4 shadow-md">
          <ul className="list-none p-0">
            {ordersideData.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer mb-2 p-4 rounded font-opensans ${
                  selectedComponentIndex === index
                    ? "bg-blue-200 font-bold"
                    : "bg-slate-500 text-white font-semibold"
                } transition duration-300`}
                // onClick={() => setSelectedComponentIndex(index)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 p-4 relative">
          <div className="mb-4 text-2xl font-semibold font-opensans">
            {selectedTitle}
          </div>
          <div className="bg-white shadow-md p-4 rounded">
            {selectedComponent}
          </div>
        </div>
      </div>

      <div className="mt-auto flex justify-end p-4">
        {isBackVisible && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleBack}
          >
            Back
          </button>
        )}

        {isSubmitVisible ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => console.log("Submit clicked")}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            Save and Next
          </button>
        )}
      </div>
    </div>
  );
};

export default DomesticOrder;
