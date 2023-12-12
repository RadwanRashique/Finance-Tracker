// Rename the function to avoid conflicts
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Transation from '../AddTransation/Transation';
import TransationList from '../TransationList/TransationList';
import EditTransation from '../AddTransation/EditTransation';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Transation />} />
        <Route path='/ListTransation' element={<TransationList />} />
        <Route path='/EditTransation' element={<EditTransation/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default AppRoutes;
