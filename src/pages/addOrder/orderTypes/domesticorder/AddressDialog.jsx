// import React, { useState } from 'react';

// const AddressDialog = ({ isOpen, onClose,addressdata }) => {
//   console.log("addressdata ",addressdata)
//   const [inputData, setInputData] = useState({
//     sendername: '',
//     address: '',
//     landmark: '',
//     pincode: '',
//     city: '',
//     state: '',
//     country: '',
//     mobile: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform any necessary actions with the form data here
//     console.log('Form submitted:', inputData);
//     // Close the dialog
//     onClose();
//   };

//   return (
//     <div className={`fixed inset-0 bg-gray-200 bg-opacity-90 ${isOpen ? '' : 'hidden'}`}>
//       <div className="flex items-center justify-center h-screen mt-10">
//         <div className="bg-white p-6 rounded-md w-[36rem]">
//           <div className="flex justify-between mb-4">
//             <h2 className="text-2xl font-bold font-opensans">Add New Address</h2>
//             <button onClick={onClose} className="text-gray-500 hover:text-red-500 cursor-pointer text-2xl font-opensans font-bold">
//               X
//             </button>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-2 gap-4">
//             <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">Sender's Name :</label>
//                 <input
//                   type="text"
//                   name="sendername"
//                   value={inputData.sendername}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={inputData.address}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">Landmark</label>
//                 <input
//                   type="text"
//                   name="landmark"
//                   value={inputData.landmark}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">Pincode</label>
//                 <input
//                   type="text"
//                   name="pincode"
//                   value={inputData.pincode}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   value={inputData.city}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">State</label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={inputData.state}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">Country</label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={inputData.country}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-semibold font-opensans text-gray-600">Mobile No</label>
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={inputData.mobile}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
              
//             </div>
//             <div className="flex justify-end mt-2">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white p-2 rounded-md"
//               >
//                 Save Address
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressDialog;


import React, { useState, useEffect } from 'react';

const AddressDialog = ({ isOpen, onClose, addressdata, selectedAddress }) => {
  const [inputData, setInputData] = useState({
    sendername: '',
    address: '',
    landmark: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    mobile: '',
  });

  useEffect(() => {
    // Set initial values if selectedAddress is provided
    if (selectedAddress) {
      setInputData(selectedAddress);
    } else {
      // Reset form fields if no selectedAddress (for adding a new address)
      setInputData({
        sendername: '',
        address: '',
        landmark: '',
        pincode: '',
        city: '',
        state: '',
        country: '',
        mobile: '',
      });
    }
  }, [selectedAddress]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', inputData);
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-gray-200 bg-opacity-90 ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center h-screen mt-10">
        <div className="bg-white p-6 rounded-md w-[36rem]">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold font-opensans">
              {selectedAddress ? 'Edit Address' : 'Add New Address'}
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-red-500 cursor-pointer text-2xl font-opensans font-bold">
              X
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">Sender's Name :</label>
                <input
                  type="text"
                  name="sendername"
                  value={inputData.sendername}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">Address</label>
                <input
                  type="text"
                  name="address"
                  value={inputData.address}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  value={inputData.landmark}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={inputData.pincode}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">City</label>
                <input
                  type="text"
                  name="city"
                  value={inputData.city}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">State</label>
                <input
                  type="text"
                  name="state"
                  value={inputData.state}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">Country</label>
                <input
                  type="text"
                  name="country"
                  value={inputData.country}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold font-opensans text-gray-600">Mobile No</label>
                <input
                  type="text"
                  name="mobile"
                  value={inputData.mobile}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                {selectedAddress ? 'Save Changes' : 'Save Address'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressDialog;

