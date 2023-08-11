import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Components/Navigation';
import Products from './pages/Products';
import  MyModal  from './Components/MyModal';
import { Routes, Route } from 'react-router-dom';
import AddRecipe from './pages/AddRecipe';


function App() {
  return (

     <Routes>
        <Route path='/' element={ <Products/>}/>
      <Route path='/new' element={<AddRecipe/>}/>
     </Routes>
  );
}

export default App;
