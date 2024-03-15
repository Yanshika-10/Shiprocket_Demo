import React from 'react';
import order from '../../assets/order.jpg';
import shiporder from '../../assets/shiporder.jpg';
import recharge from '../../assets/recharge.jpg';
import knowledge from '../../assets/knowledge.png';
import tutorial from '../../assets/tutorial.png';
import { useNavigate} from 'react-router-dom';

const DashboardNew = () => {

    const navigate = useNavigate();

  return (
    <>
         <div className="bg-white p-8 rounded-lg shadow-md mt-6 ml-[2rem]">
            <div className="flex justify-around">
                <div className=" w-[31%] bg-[#ebf9fc] p-8 rounded-lg hover:shadow-lg transition duration-300 ease-in-out text-center">
                <div className="flex justify-center  text-4xl mb-6 text-blue-500 transform hover:scale-125 transition-transform duration-300 ease-in-out"><img src={order}alt='order' /></div>
                <p className="text-2xl font-opensans font-semibold mb-4 text-gray-700">Add Your First Order</p>
                <p className="text-base font-opensans my-10 text-gray-500">Add your order manually or connect your website / marketplace orders.</p>
                <button onClick={() => navigate('/admin/addorder')} className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 font-opensans font-semibold ease-in-out focus:outline-none focus:ring focus:border-green-700">
                    Add Manual Order
                </button>

                </div>

                <div className=" w-[31%] bg-[#ebf9fc] p-8 rounded-lg hover:shadow-lg transition duration-300 ease-in-out text-center">
                <div className="flex justify-center  text-4xl mb-6 text-blue-500 transform hover:scale-125 transition-transform duration-300 ease-in-out"><img src={shiporder}alt='order' /></div>
                <p className="text-2xl font-opensans font-semibold mb-4 text-gray-700">Ship Your First Order</p>
                <p className="text-base font-opensans my-10 text-gray-500">Add your order manually or connect your website / marketplace orders.</p>
                <button className="mt-4 bg-gradient-to-r  from-orange-200 to-orange-400 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 font-opensans font-semibold ease-in-out focus:outline-none focus:ring focus:border-orange-300">
                    Ship Now
                </button>

                </div>

                <div className="w-[31%] bg-[#ebf9fc] p-8 rounded-lg hover:shadow-lg transition duration-300 ease-in-out text-center">
                <div className="flex justify-center  text-4xl mb-6 text-blue-500 transform hover:scale-125 transition-transform duration-300 ease-in-out"><img src={recharge}alt='order' /></div>
                <p className="text-2xl font-opensans font-semibold mb-4 text-gray-700">Recharge Your Wallet</p>
                <p className="text-base font-opensans my-10 text-gray-500">Add your order manually or connect your website / marketplace orders.</p>
                <button className="mt-4 bg-gradient-to-r from-blue-300 to-blue-900 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out font-semibold font-opensans  focus:outline-none focus:ring focus:border-blue-300">
                Recharge
                </button>

                </div>
            </div>
         </div>

         <div className="bg-white p-8 rounded-lg shadow-md my-10 ml-[2rem]">

         <h2 className='font-bold mb-8 font-opensans text-4xl text-gray-500 '>Help Resources</h2>

            <div className="flex justify-around">
                <div className=" w-[48%] bg-[#ebf9fc] p-8 rounded-lg hover:shadow-lg transition duration-300 ease-in-out ">
                <div className='flex'>
                    <div className='w-[60%]'>
                    <p className="text-2xl font-opensans font-semibold mb-4 text-gray-700">Shiprocket Knowledge Centre</p>
                        <p className="text-base font-semibold font-opensans my-6 text-gray-500">Add your order manually or connect your website / marketplace orders.</p>
                        <button  className="mt-4 ml-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 font-opensans font-semibold ease-in-out focus:outline-none focus:ring focus:border-green-700">
                            Add Manual Order
                        </button>
                    </div>
                
                <div className="flex justify-center  text-4xl mb-6 text-blue-500 transform hover:scale-125 transition-transform duration-300 ease-in-out"><img src={knowledge} alt='order' /></div>
                </div>
                </div>
                <div className=" w-[48%] bg-[#ebf9fc] p-8 rounded-lg hover:shadow-lg transition duration-300 ease-in-out ">
                <div className='flex'>
                    <div className='w-[60%]'>
                        <p className="text-2xl font-opensans font-semibold mb-4 text-gray-700">Watch Tutorials</p>
                         <p className="text-base font-semibold font-opensans my-6 text-gray-500">Add your order manually or connect your website / marketplace orders.</p>
                        <button className="mt-4 ml-4 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 font-opensans font-semibold ease-in-out focus:outline-none focus:ring focus:border-green-700">
                            Add Manual Order
                        </button>
                    </div>
                
                  <div className="flex justify-center  text-4xl mb-6 text-blue-500 transform hover:scale-125 transition-transform duration-300 ease-in-out"><img src={tutorial} alt='order' /></div>
                </div>
             </div>

                
            </div>
         </div>
  
    </>
  
  );
}

export default DashboardNew;
