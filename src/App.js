import React from 'react';
import { Routes , Route} from 'react-router-dom';
import { FcLock } from "react-icons/fc";
import Home from './pages/home.jsx';
import Goals from './pages/Goals.jsx'

import './index.css';


function App() {
 return (
  <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/goals' element={<Goals/>}/>
  </Routes>
  );
}

export default App;
