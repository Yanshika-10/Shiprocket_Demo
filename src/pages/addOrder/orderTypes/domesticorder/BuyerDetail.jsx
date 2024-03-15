import React, { useState } from 'react';

const BuyerDetail = () => {
  const [user, setUser] = useState({
    email: '',
    mobile: '',
    name: '',
    address:'',
    landmark:'',
    pincode:'',
    city:'',
    state:'',
    country:'',
    useBillingAddress:'',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("user", user)
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <p className='font-opensans font-semibold'>To whom is the order being delivered ? <span className='font-opensans text-gray-400'>(Buyer’s Info)</span> </p>
      <div className="flex gap-4">
        <div className="w-1/3">
          <label htmlFor="mobile" className="text-lg font-semibold block mb-2">
            Mobile
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="tel"
              onChange={(e) =>
                setUser({ ...user, mobile: e.target.value })
              }
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Mobile"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-1/3">
          <label htmlFor="name" className="text-lg font-semibold block mb-2">
            Name
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="name"
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-1/3">
          <label htmlFor="email" className="text-lg font-semibold font-opensans block mb-2">
            Email
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="email"
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <p className=' mt-4 font-opensans font-semibold'>Where is the order being delivered to ? <span className='font-opensans text-gray-400'> (Buyer’s Address)</span> </p>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label htmlFor="address" className="text-lg font-semibold block mb-2">
            Complete Address
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="address"
              onChange={(e) =>
                setUser({ ...user, address: e.target.value })
              }
              type="text"
              name="address"
              id="address"
              placeholder="Add Address"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="landmark" className="text-lg font-semibold block mb-2">
            LandMark
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="landmark"
              onChange={(e) =>
                setUser({ ...user, landmark: e.target.value })
              }
              type="text"
              name="landmark"
              id="landmark"
              placeholder="Landmark"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
    
      </div>
      <div className="flex gap-4">
        <div className="w-1/4">
          <label htmlFor="pincode" className="text-lg font-semibold block mb-2">
            Pincode
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="pincode"
              onChange={(e) =>
                setUser({ ...user, pincode: e.target.value })
              }
              type="number"
              name="pincode"
              id="pincode"
              placeholder="Pincode"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-1/4">
          <label htmlFor="city" className="text-lg font-semibold block mb-2">
            City
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="city"
              onChange={(e) =>
                setUser({ ...user, city: e.target.value })
              }
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-1/4">
          <label htmlFor="state" className="text-lg font-semibold block mb-2">
            State
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="state"
              onChange={(e) =>
                setUser({ ...user, state: e.target.value })
              }
              type="text"
              name="state"
              id="state"
              placeholder="State"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-1/4">
          <label htmlFor="country" className="text-lg font-semibold block mb-2">
            Country
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="country"
              onChange={(e) =>
                setUser({ ...user, country: e.target.value })
              }
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
    
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="billingAddressCheckbox"
          onChange={(e) =>
            setUser({ ...user, useBillingAddress: e.target.checked })
          }
          className="mr-2 mt-[2px] w-[1rem] h-[2rem]"
        />
        <label htmlFor="billingAddressCheckbox" className="text-lg font-semibold">
           Billing address is same as the shipping address
        </label>
      </div>

 
    </form>
  );
};

export default BuyerDetail;
