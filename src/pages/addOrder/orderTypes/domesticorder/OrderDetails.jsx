import React, { useState } from "react";
import Select from 'react-select';
import Drop from "./Drop";

const OrderDetails = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
 
  const [news, setNews] = useState([
    {
      OrderID: "",
      OrderDate: "",
      OrderChannel: "",
      productName: "",
      unitprice: "",
      quantity: "",
      productcategory: "",
      paymode: "",
    },
  ]);

  const [newsList, setNewsList] = useState([
    {
      productName: "",
      unitprice: "",
      quantity: "",
      productcategory: "",
    },
  ]);

  const handleClick = (e, index) => {
    setNewsList([
      ...newsList,
      { productName: "", unitprice: "", quantity: "", productcategory: "" },
    ]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeval = [...newsList];
    onchangeval[i][name] = value;
    setNewsList(onchangeval);
  };

  const handleDelete = (index) => {
    const newdata = [...newsList];
    newdata.splice(index, 1);
    setNewsList(newdata);
  };

  const [qtyval, setQtyval] = useState(0);

  const incHandle = (e) => {
    e.preventDefault();
    setQtyval(qtyval + 1);
  };
  const decHandle = (e) => {
    e.preventDefault();
    qtyval === 0 ? setQtyval(0) : setQtyval(qtyval - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setNews({
      ...news,
      [name]: value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="p-4 mb-3">
        <form onSubmit={submitHandle}>
          <div className="flex w-full">
            <div className="w-1/3 mr-5">
              <p className="font-opensans font-semibold">Order ID </p>
              <input
                type="text"
                name="OrderID"
                placeholder="Order ID"
                value={news.OrderID}
                onChange={handleInputChange}
                className="w-full h-10 border rounded px-3 py-2 mt-1"
              />
            </div>

            

            <div className="w-1/3 mr-5">
              <p className="font-opensans font-semibold">Order Date</p>
              <input
                type="date"
                name="OrderDate"
                placeholder="OrderDate"
                value={news.OrderDate}
                onChange={handleInputChange}
                className="w-full h-10 border rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="w-1/3">
              <p className="font-opensans font-semibold">Order Channel</p>
              <select
                name="OrderChannel"
                value={news.OrderChannel}
                onChange={handleInputChange}
                className="w-full h-10 border rounded px-3 py-2 mt-1"
              >
                <option value="Shirt" className="font-opensans">Shirt</option>
                <option value="Jeans"  className="font-opensans">Jeans</option>
                <option value="Shoes" className="font-opensans">Shoes</option>
                <option value="Suits" className="font-opensans">Suits</option>
                <option value="Others" className="font-opensans">Others</option>
              </select>
            </div>
          </div>
          <div className="w-full">
          <div>
         <Drop options={options}/>
      </div>
          </div>
          <br />
          <hr></hr>
          <div>
            <h5 className="mt-3 font-opensans font-semibold mb-1">
              Product details
            </h5>
           
            <div>
  {newsList.map((entry, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row items-center my-4 border p-4 rounded-md shadow-md"
    >
      <div className="flex flex-col mb-2 md:mb-0 md:mr-4">
        <label
          htmlFor={`productName${index}`}
          className="mb-1 font-opensans font-semibold"
        >
          Product name
        </label>
        <input
          type="text"
          id={`productName${index}`}
          name="productName"
          placeholder="Product name"
          value={entry.productName}
          onChange={(e) => handleChange(e, index)}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="flex flex-col mb-2 md:mb-0 md:mr-4">
        <label
          htmlFor={`unitPrice${index}`}
          className="mb-1 font-semibold font-opensans"
        >
          Unit Price
        </label>
        <input
          type="number"
          id={`unitPrice${index}`}
          name="unitprice"
          placeholder="Unit Price"
          value={entry.unitprice}
          onChange={(e) => handleChange(e, index)}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="flex flex-col mb-2 md:mb-0 md:mr-4">
        <label
          htmlFor={`quantity${index}`}
          className="mb-1 font-semibold font-opensans"
        >
          Quantity
        </label>
        <input
          type="number"
          id={`quantity${index}`}
          name="quantity"
          placeholder="Quantity"
          value={entry.quantity}
          onChange={(e) => handleChange(e, index)}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="flex flex-col mb-2 md:mb-0">
        <label
          htmlFor={`productCategory${index}`}
          className="mb-1 font-semibold font-opensans"
        >
          Product Category
        </label>
        <input
          type="text"
          id={`productCategory${index}`}
          name="productcategory"
          placeholder="Product Category"
          value={entry.productcategory}
          onChange={(e) => handleChange(e, index)}
          className="border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      {index !== 0 && (
       <div className="flex-1 text-center">
       <button
          onClick={() => handleDelete(index)}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md mt-2 md:mt-0 font-opensans"
        >
          Delete
        </button>
       </div>
      )}
    </div>
  ))}
  <button
    className="bg-teal-100 rounded p-2 mt-3 font-opensans mb-3 "
    onClick={handleClick}
  >
    <b>Add Product</b>
  </button>
</div>

          </div>
          <br></br>
          <hr></hr>
          <div>
            <div>
              <h5 className="mt-4 font-opensans font-semibold mb-3">
                Payment Details
              </h5>
              <p className="mb-1 font-opensans">
                Select mode of payment that your buyer has chosen for the order
              </p>
            </div>
            <div className=" flex">
              <div className="mr-4 flex">
              <input
                  type="radio"
                  onChange={handleInputChange}
                  name="paymode"
                  id="pay-mode"
                  value="Online-mode"
                  className="mr-2"
                />
                <p className="font-opensans font-semibold">Online</p>{" "}
              </div>
              <div className="flex">
              <input
                  type="radio"
                  onChange={handleInputChange}
                  name="paymode"
                  id="pay-mode"
                  value="Cash-On-Delivery-mode"
                  className="mr-2"
                />
                <p className="font-opensans font-semibold">Cash on delivery</p>{" "}
                
              </div>
            </div>
          </div>
          {/* <button type="submit" className="font-opensans mt-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Submit
          </button> */}
        </form>
      </div>
      <div className="bg-cyan-50 rounded p-2 ">
        <div className="flex justify-between font-opensans">
          <p>Sub total</p>
          <p>Rs 100</p>
        </div>
        <div className="flex justify-between font-opensans">
          <p>Other charges</p>
          <p>Rs 100</p>
        </div>
        <div className="flex justify-between font-opensans">
          <p>
            <b>Total order value</b>
          </p>
          <p>
            <b>Rs 200</b>
          </p>
        </div>
       
      </div>
     
    </div>
  );
};

export default OrderDetails;

// import React from 'react'
// import Order from './Order'

// const OrderDetails = () => {
//   return (
//     <div>
//       <Order/>
//     </div>
//   )
// }

// export default OrderDetails
