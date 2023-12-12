import React from 'react'
import './App.css'
import AddTransationCard from './Pages/AddTransation/Transation'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Pages/utils/AppRoutes'
function App() {
  return (
   <>
   
   <BrowserRouter>
   
   <AppRoutes/>
   
   
   </BrowserRouter>
  
   
   </>
  )
}

export default App
