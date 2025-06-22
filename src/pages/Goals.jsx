import React from "react";
import SideBar from "../components/sideBar";



function goals(){
   return(
      <div className="grid grid-cols-[300px_1fr] bg-slate-100 h-[100vh]">
         <SideBar/>
         <div className="text-main font-bold text-2xl">
            gooooooooooool
         </div>
      </div>
   );
}
export default goals;