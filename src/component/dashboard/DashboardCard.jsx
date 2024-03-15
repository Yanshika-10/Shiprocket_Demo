// DashboardCard.js
import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const DashboardCard = ({
  logo,
  dataCount,
  title,
  path,
  passState,
  buttonColor,
  buttonHoverColor,
  navigate, // Accept navigate as a prop
}) => {
  return (
    <div className={`w-full flex shadow flex-col bg-white h-auto hover:bg-blue-50 rounded-lg`}>
      <div className=" group flex-1 items-center justify-between">
        <div className={`flex items-center rounded-lg p-4  cursor-pointer`}>
          <div className="lg:block hidden"><img src={logo} alt='image' /></div>

          <div className="text-gray-900 lg:text-left text-center ml-10 ">
          <span className="block lg:text-4xl text-gray-600 text-4xl font-bold py-1">
              {dataCount}
            </span>
            <span className="block  text-gray-400  text-center text-lg font-semibold py-1">
              {title}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate(path, { state: { data: passState } })}
        className={`flex rounded-b-lg bg-slate-200 text-gray-500 justify-center ${buttonColor} ${buttonHoverColor}  w-full items-center`}
      >
        <span className="px-2 font-opensans text-lg text-gray-500 font-semibold">More info </span>
        <span>
          <BsArrowRightCircleFill  size={20} className='text-blue-400'/>
        </span>
      </button>
    </div>
  );
};

export default DashboardCard;
