import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer,toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const Form = ({ showToast }) => {
  // define state
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  // const [newData, setNewData] = useState("");

  // call navigate function
  const navigate = useNavigate();

  // fetch localdata
  const localData = JSON.parse(localStorage.getItem("Login"));

  // set new title
  useEffect(() => {
    document.title = "Admin Panel";
  }, []);

  useEffect(() => {
    if (localData) {
      navigate("/admin/dashboard");
    }
  }, [localData, navigate]);

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_TEST_URL}/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers here if needed
          },
        }
      );
      if (response.status === 200) {
        console.log(response?.data?.token);
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("user", response?.data?.user);
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const checkUpdate = async (e) => {
  //   try {
  //     const response = await axios.get(
  //       "http://43.230.201.234:82/api/v2/WebAPI/GetDeviceLogs?APIKey=452911032404&FromDate=2024-03-01&ToDate=2024-03-04&EmployeeName=null&SerialNumber=C26288221F1C212E"
  //     );
  //     console.log(response);
  //     setNewData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    // <div className="bg-white p-20  rounded-3xl border-1 border-gray-200">

    //   <h1 className=" text-4xl font-semibold ">ADMIN PANEL</h1>
    //   <p className=" font-medium text-lg text-gray-500 mt-4 ">
    //     Welcome back! Please enter your details
    //   </p>
    //   <form onSubmit={handleLogin} className="mt-8 ">
    //     <div className=" mt-2 ">
    //       <label className="text-lg font-medium">Email</label>
    //       <div className=" border  border-primary rounded mt-1">
    //       <input
    //         required
    //         autoComplete="username"
    //         onChange={(e) =>
    //           setUser({ ...user, [e.target.name]: e.target.value })
    //         }
    //         type="text"
    //         name="email"
    //         placeholder="Email"
    //         className="w-full p-1 "
    //       />
    //       </div>
    //     </div>
    //     <div className="mt-2">
    //       <label className="text-lg font-medium">Password</label>
    //       <div className="border border-primary rounded mt-1">
    //       <input
    //         required
    //         autoComplete="current-password"
    //         type="password"
    //         name="password"
    //         onChange={(e) =>
    //           setUser({ ...user, [e.target.name]: e.target.value })
    //         }
    //         placeholder="Password"
    //         className="w-full p-1"
    //       />
    //       </div>
    //     </div>
    //       {
    //         error !== ""?
    //       <p className="p-2 text-pink-500">{error}</p>:null
    //       }
    //     <div className=" mt-6  flex flex-col gap-y-4">
    //       <button type="submit" className=" bg-gray-700 text-white hover:bg-green-600 border border-primary transition-all text-lg rounded-sm px-6 py-2 ease-out duration-75 delay-75">
    //         Sign In
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="bg-gradient-to-b  from-[#FFDEE9] to-[#68bbb8] shadow-2xl p-12 rounded-lg  max-w-md mx-auto">
      <h1 className="text-3xl font-semibold mb-4">ADMIN PANEL</h1>
      <p className="text-gray-500 mb-6">
        Welcome back! Please enter your details
      </p>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="text-lg font-semibold block mb-1">
            Email
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="username"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-lg font-semibold block mb-1"
          >
            Password
          </label>
          <div className="border border-gray-300 rounded">
            <input
              required
              autoComplete="current-password"
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
              placeholder="Password"
              className="w-full p-2 focus:outline-none"
            />
          </div>
        </div>
        {error !== "" && <p className="text-pink-500 mb-4">{error}</p>}
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="bg-gray-700 text-white hover:bg-green-600 border border-gray-700 transition-all text-lg rounded-sm px-6 py-2 duration-300"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* <button className="mt-20" onClick={checkUpdate}>
        Login
      </button> */}
  
{/* {
  newData && newData.map((item, index) => (
    <div key={index}>
      <p>{JSON.stringify(item)}</p>
    </div>
  ))
}
 */}
    </div>
  );
};

export default Form;
