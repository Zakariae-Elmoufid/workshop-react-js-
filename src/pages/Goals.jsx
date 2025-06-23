import React, { useState } from 'react';
import SideBar from "../components/sideBar";
import { FaPlus } from "react-icons/fa";
import Button from '../components/button';
import { FiTarget } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import GoalForm from "../components/goalForm";
import { GiGoalKeeper } from "react-icons/gi";



function Goals(){
     const goals = [
    {
      title: "Learn Web Development",
      status: "active" ,
      progress: 65,
      progressText: "65% complete • 4 months remaining",
      metadata: ['📅 Started: Jan 2025', '🎯 Target: Dec 2025'],
      category: "Education",
      description: "Master modern web development technologies including React, TypeScript, and Node.js"
    },
    {
      title: "Read 24 Books This Year",
      status: "active" ,
      progress: 42,
      progressText: "42% complete • 10 books read",
      metadata: ['📚 Current: 10/24 books', '📈 On track'],
      category: "Personal Growth",
      description: "Expand knowledge through diverse reading across fiction, non-fiction, and technical books"
    },
    {
      title: "Fitness & Health",
      status: "completed" ,
      progress: 100,
      progressText: "100% complete • Goal achieved!",
      metadata: ['💪 Workout 3x/week', '✅ Completed'],
      category: "Health",
      description: "Maintain consistent exercise routine and healthy lifestyle habits"
    },
    {
      title: "Learn Spanish",
      status: "active" ,
      progress: 30,
      progressText: "30% complete • 3 months in",
      metadata: ['🗣️ Practice daily', '📱 Using Duolingo'],
      category: "Education",
      description: "Achieve conversational Spanish proficiency for travel and career opportunities"
    }
  ];

    const categories = ["All", "Education", "Health", "Personal Growth", "Career"];

    const [isOpen , setIsOpen] = useState(false);
    function openForm(){
      setIsOpen(true);
    }
    function closeForm(){
      setIsOpen(false);
    }
 
   return(
      <div className="grid grid-cols-[300px_1fr] bg-slate-100 h-[100vh]">
         <SideBar/>
         <div >
         <GoalForm isOpen={isOpen}  onClose={closeForm} /> 
            <div className='flex justify-between items-center m-6'>
                <div className=''>
                <h2 className='font-medium text-3xl'>Goals</h2>
                <p className="text-gray-600 pt-2">Track and manage your personal and professional goals</p>
                </div>
                    <Button onClick={openForm} children="New Goal" className="text-white bg-gradient-to-r from-main to-secondary py-2 px-3 rounded-md text-sm">
                         <FaPlus className="inline mr-2"/> Add Goals
                     </Button>   
            </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 m-6 ">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Total Goals</h3>
                    <FiTarget className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">4</div>
                <p className="text-sm text-gray-600">3 active, 1 completed</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Average Progress</h3>
                    <IoMdTrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">59%</div>
                <p className="text-sm text-gray-600">Across all active goals</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
                    <FaCalendar className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">2</div>
                <p className="text-sm text-gray-600">Goals with progress</p>
                </div>
         </div>
  
         <div className="flex gap-2 m-6">
            {categories.map((category) => (
                <Button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              category === "All"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
            }`}  key={category} children={category}/>
            ))}
         </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {goal.category}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  goal.status === 'active' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {goal.status === 'active' ? 'Active' : 'Completed'}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{goal.description}</p>
              
              <div className="mb-4">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{goal.progressText}</p>
              </div>
              
              <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                {goal.metadata.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
      </div>
   );
}
export default Goals;
