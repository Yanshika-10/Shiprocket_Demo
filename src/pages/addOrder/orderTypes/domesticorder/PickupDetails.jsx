
// import React, { useState } from 'react';
// import { FaSearch, FaHome } from 'react-icons/fa'; 
// import AddressDialog from './AddressDialog'; 
// import addressdata from './addressdata';

// const PickupDetails = () => {
//   const [address, setAddress] = useState('');
//   const [isDialogOpen, setDialogOpen] = useState(false); 

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Address submitted:', address);
//   };

//   const openDialog = () => {
//     setDialogOpen(true);
//   };

//   const closeDialog = () => {
//     setDialogOpen(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <p className='font-opensans font-semibold mb-3'>Where is the order being sent from  ? <span className='font-opensans text-gray-400'>(Your Address)</span> </p>
//         <div className="flex items-center justify-center w-1/2">
        
//           <div className="relative w-full mb-4">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FaSearch className="text-gray-500" />
//             </div>
//             <input
//               type="text"
//               className="pl-10 border-2 border-gray-300 p-2 w-full"
//               placeholder="Enter your address"
//               value={address}
//               onChange={handleAddressChange}
//             />
//           </div>
        
//         </div>
        
//         <div className=" mt-4">
//         <p className='font-opensans text-xl font-semibold mb-3'>Other Addresses</p>
//         </div>
        
//         <div className="flex flex-wrap gap-4 mt-2 cursor-pointer" >
//           <div className=" justify-center items-center border-dashed border-2 flex flex-col  p-12 border-gray-400 rounded-2xl" onClick={openDialog}>
            
//             <FaHome className="text-blue-500" size={36}/>
//             <p className="ml-2 font-opensans font-semibold mt-2">Add New Address</p>
//           </div>

//           {addressdata.map((addressItem) => (
//             <div key={addressItem.id} className="border-2 flex flex-col bg-blue-50 p-8 border-blue-500 rounded-xl " onClick={openDialog}>
//                 <FaHome className="text-blue-500 mt-[-1rem] w-full" size={36}/>
//                 <p className="mt-2 text-base font-semibold font-opensans text-slate-700">{`${addressItem.sendername}`}</p>
//                 <div className="address-info mt-2 text-slate-500 text-sm font-opensans">
//                   <p className='font-opensans'>{`${addressItem.address}, ${addressItem.landmark},`}</p>
//                   <p className='font-opensans'>{`${addressItem.pincode}, ${addressItem.city}, ${addressItem.state}`}</p>
//                   <p className='font-opensans'>{`${addressItem.country}`}</p>
//                 </div>

//                 <p className="mt-2 font-opensans text-sm text-slate-500"><span className='font-semibold text-slate-700'>Mobile :</span>{` ${addressItem.mobile}`}</p>
//               </div>
          
//           ))}
          
        
          
//         </div>
//       </form>
      
      
//       {isDialogOpen && (
//         <AddressDialog
//           isOpen={isDialogOpen}
//           onClose={closeDialog}
//           addressdata={addressdata}
//         />
//       )}
//     </div>
//   );
// };

// export default PickupDetails;

import React, { useState } from 'react';
import { FaSearch, FaHome } from 'react-icons/fa';
import AddressDialog from './AddressDialog';
import addressdata from './addressdata';
import Select from 'react-select';


  

const PickupDetails = () => {
  const [address, setAddress] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
 

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressClick = (addressItem) => {
    setSelectedAddress(addressItem);
    setDialogOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address submitted:', address);
  };

  const openDialog = () => {
    setSelectedAddress(null); // Reset selectedAddress when opening dialog for new address
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className='font-opensans font-semibold mb-3'>Where is the order being sent from ? <span className='font-opensans text-gray-400'>(Your Address)</span> </p>
        <div className="flex items-center justify-center w-1/2">
          <div className="relative w-full mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="pl-10 border-2 border-gray-300 p-2 w-full"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <div className=" mt-4">
          <p className='font-opensans text-xl font-semibold mb-3'>Other Addresses</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-2 cursor-pointer" >
          <div className=" justify-center items-center border-dashed border-2 flex flex-col p-12 border-gray-400 rounded-2xl" onClick={openDialog}>
            <FaHome className="text-blue-500" size={36}/>
            <p className="ml-2 font-opensans font-semibold mt-2">Add New Address</p>
          </div>
          {addressdata.map((addressItem) => (
            <div key={addressItem.id} className="border-2 flex flex-col bg-blue-50 p-8 border-blue-500 rounded-xl " onClick={() => handleAddressClick(addressItem)}>
              <FaHome className="text-blue-500 mt-[-1rem] w-full" size={36}/>
              <p className="mt-2 text-base font-semibold font-opensans text-slate-700">{`${addressItem.sendername}`}</p>
              <div className="address-info mt-2 text-slate-500 text-sm font-opensans">
                <p className='font-opensans'>{`${addressItem.address}, ${addressItem.landmark},`}</p>
                <p className='font-opensans'>{`${addressItem.pincode}, ${addressItem.city}, ${addressItem.state}`}</p>
                <p className='font-opensans'>{`${addressItem.country}`}</p>
              </div>
              <p className="mt-2 font-opensans text-sm text-slate-500"><span className='font-semibold text-slate-700'>Mobile :</span>{` ${addressItem.mobile}`}</p>
            </div>
          ))}
        </div>
      </form>
      {isDialogOpen && (
        <AddressDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          addressdata={addressdata}
          selectedAddress={selectedAddress}
        />
      )}

      <div>
      </div>
    </div>
  );
};

export default PickupDetails;

