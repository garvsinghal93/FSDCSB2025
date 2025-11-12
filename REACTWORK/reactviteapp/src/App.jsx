import { useState } from 'react'
import './App.css'
import ImageManipulation from './component/ImageManipulation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import Dashboard from '../pages/Dashboard'
import MainLayout from '../pages/MainLayout'

function App() {
  const [data, setData] = useState({});

  return (
    <div>
     {/* <ImageManipulation/> */}

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route path='/login' element={<Login logData={data}/>}></Route>
        <Route path='/registration' element={<Registration regData={setData} />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>

     <h2>
      {JSON.stringify(data)}
     </h2>
    </div>
  )
}

export default App