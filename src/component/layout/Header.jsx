// Header.jsx
import React, { Fragment } from 'react';
import { BiBell, BiPowerOff } from 'react-icons/bi';
import { HiBars3 } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

const Header = ({ toggleSideBar, showSideBar }) => {
  
  const navigate = useNavigate();
  const loginData = JSON.parse(localStorage.getItem('Login'));

  return (
    <div className="fixed top-0 w-full z-10 border-b border-gray-200">
      {/* <div className={`bg-primary  border-white  inset-x-0 top-0 overflow-visible lg:border-white ${showSideBar ? 'delay-200 duration-200' : ''}   w-full`}>
        <div className="bg-[#f9fafb]  h-16 px-4 flex items-center border-b border-gray-200 justify-between">bg-gradient-to-r  from-[#FFDEE9] to-[#61adab] 
          <div className="text-blue-900 capitalize font-medium bg-gray-100 p-2 rounded-lg shadow-2xl">
          <h1 className='text-3xl'>E-CONNECT</h1>
          
          </div> */}
          <div className='flex p-2 justify-center items-center  bg-gradient-to-r from-blue-300 to-purple-300'>
            
            <p className='font-neuton text-2xl text-black font-semibold'>You are viewing the Shiprocket Demo </p>
            <button className='ml-4 bg-gradient-to-r from-blue-400 to-blue-900 focus:outline-none text-white font-opensans font-semibold p-2 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg'>Sign Up Free</button>
            
          </div>
         
          <div className={`bg-primary border-white inset-x-0 top-0 overflow-visible lg:border-white ${showSideBar ? 'delay-200 duration-200' : ''} w-full`}>
      <div className="bg-gradient-to-r from-gray-50 to-gray-200 h-16 px-4 flex items-center border-b border-gray-200 justify-between">
        {/* <div className="text-blue-900 ml-[7rem] capitalize font-medium bg-gray-100 p-2 rounded-lg shadow-2xl"> */}
        <div className="text-blue-900 ml-[7rem] capitalize font-medium  p-2">
          <h1 className='text-3xl'>E-CONNECT</h1>
        </div>
      
        

          <div className="flex items-center text-black">
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                  <span className="sr-only">Open user menu</span>
                  <div
                    className="h-10 w-10 rounded-full border border-neutral-900 bg-black bg-cover bg-no-repeat bg-center"
                    // style={{ backgroundImage: `url(${loginData?.profile})` }}
                  >
                    <span className="sr-only">{loginData?.first_name}</span>
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right z-60 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => {
                          loginData.role === 'admin' ?
                            navigate('/admin/adminprofile')
                            :
                            navigate('/dashboard/profileview')
                        }}
                        className={classNames(
                          active && 'bg-gray-100',
                          'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                        )}
                      >
                        Profile
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => {
                          loginData?.role === 'admin' ?
                            navigate('/admin/updatepassword')
                            :
                            navigate('/dashboard/updatepassword')
                        }}
                        className={classNames(
                          active && 'bg-gray-100',
                          'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                        )}
                      >
                        Update password
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active && 'bg-gray-100',
                          'active:bg-gray-200 flex items-center rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                        )}
                        onClick={(e) => {
                          e.preventDefault()
                          localStorage.removeItem('Login')
                          localStorage.removeItem('LoginToken')
                          navigate('/')
                        }}
                      >
                        <span><BiPowerOff className="text-red-500" size={20} /></span> Sign out
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <BiBell size={40} className="px-2 cursor-pointer hover:text-sky-500" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;





