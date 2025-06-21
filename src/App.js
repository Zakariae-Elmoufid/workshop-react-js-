import React from 'react';
import SideBar from './components/sideBar';
import { FcLock } from "react-icons/fc";
import './index.css';


function App() {
 return (
    <div className='grid grid-cols-[300px 1fr] '>
      <SideBar />
    </div>
  );
}

export default App;
