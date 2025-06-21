import React from "react";
import { FcPositiveDynamic } from "react-icons/fc";
import NavItem from '../ui/navItem';


function sideBar(){
    return (
         <div className="w-[300px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] bg-white">
              <div className="p-5 my-4 ">
                <h1 className="bg-gradient-to-r from-main to-secondary text-transparent bg-clip-text font-semibold text-2xl">Goal Manager</h1>
                <p>Productivity Dashboard</p>
              </div>
              <nav>
                <ul className="flex flex-col">
                    <NavItem icon={"📊"} children={"Dashboard"}  link={'/#'}  />
                    <NavItem icon={"🎯"} children={"Dashboard"}  link={'/#'}  />
                    <NavItem icon={"📅"} children={"Tasks"}  link={'/#'}  />
                    <NavItem icon={"📈"} children={"Analytics"}  link={'/#'}  />
                    <NavItem icon={"💡"} children={"Reviews"}  link={'/#'}  />
                    <NavItem icon={"⚙️"} children={"Settings"}  link={'/#'}  />
                   
                   
                        
                </ul>
              </nav>
              <div className="p-5 flex items-center gap-2 mt-6 ">
                <div className="bg-gradient-to-t from-main  to-secondary text-white font-medium w-10 h-10 flex justify-center items-center  rounded-full">zk</div>
                <h3>zakaria moufid</h3>
              </div>
         </div>
    );
}

export default sideBar;