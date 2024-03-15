import { useState } from 'react'

import './App.css'
import { Routes , Route } from 'react-router-dom'
import Login from './component/login/Login'
// import Dashboard from './component/dashboard/Dashboard'
import DashboardLayout from './component/dashboardlayout/DashboardLayout'
// import Dashboard from './component/dashboard/Dashboard'

import {routes as MapRoutes} from './component/route/routes'
import DashboardNew from './component/newDashboard/DashboardNew'
import AddOrder from './pages/addOrder/AddOrder'


function App() {

  return (
    
  
      <Routes>
      <Route path="/" element={<Login />} />
      
      {/* <Route path='/admindashboard' element={<DashboardLayout />} /> */}

      <Route  path="/admin" element={<DashboardLayout/>}>
            {/* <Route index element={<Dashboard/>}/> */}
            <Route path='/admin/dashboard' element={<DashboardNew/>}/>
            <Route path='/admin/addorder' element={<AddOrder />} /> 
            
          {
            MapRoutes&& MapRoutes.map((x,index)=>(
            <Route path={x.path} element={x?.route} key={index}/>))
          }
      </Route>
    </Routes> 

    
  )
}

export default App
