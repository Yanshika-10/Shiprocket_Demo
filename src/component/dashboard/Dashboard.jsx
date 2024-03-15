// Dashboard.js
import React, { useEffect, useState } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { GrCertificate } from 'react-icons/gr';
import DashboardCard from './DashboardCard';
import { dashboardData } from './dashboardData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
 
const Dashboard = () => {
  const navigate = useNavigate();
  // const [dashboardData, setDashboardData] = useState([]);

  const getDashboardData = async()=>{
		// const request = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`,{
		// 	headers:{
		// 		'Authorization':`Bearer ${JSON.parse(localStorage.getItem('LoginToken'))}`,
		// 		'Accept':'application/json'
		// 	}
		// })
		// const response = await request.data
		// console.log('dashbord',response?.data)
		// if(response?.code ===200){
		// 	// console.log('dashbord',response?.data)
		// 	setDashboardData(response?.data)
		// }
	}
	
	// useEffect(()=>{
	// 	getDashboardData()
	// },[])

  return (
    <div className="lg:px-4 lg:py-0 py-2 px-2 w-full">
      <div className="grid  grid-cols-2 lg:gap-4 gap-2 lg:grid-cols-4">
        {dashboardData &&
          dashboardData.map((dashboard, index) => (
            <DashboardCard
              key={index}
              logo={dashboard.logo}
              data={dashboard.data}
              title={dashboard.title}
              path={dashboard.path}
              passState={dashboard.passState}
              dataCount={dashboard.dataCount}
              // cardBackgroundColor="bg-gray-200 hover:bg-cyan-800 duration-100 delay-100"
              // buttonColor="bg-sky-600 delay-100 duration-100"
              // buttonHoverColor="hover:bg-cyan-500"
              navigate={navigate}
            />
          ))}
      </div>
      <div className="flex flex-row py-4 justify-center w-full">
        {/* Add other components here */}
      </div>
    </div>
  );
};

export default Dashboard;
