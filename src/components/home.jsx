import react from 'react';
import SideBar from './sideBar';
import Button from './button';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { GoGoal } from "react-icons/go";




function home(){
    return  (
      <div  className='grid grid-cols-[300px_1fr] bg-slate-100 h-[100vh]    '>
        <SideBar/>
        <div>
            <div className='flex justify-between m-6'>
                <h2 className='font-medium text-3xl'>Dashboard Overview</h2>
                <div className='flex gap-2'>
                    <Button children="Add Review" className='text-gray-500 border-2 py-2 px-3 rounded-md text-sm'/>
                    <Button children="New Goal" className="text-white bg-gradient-to-r from-main to-secondary py-2 px-3 rounded-md   text-sm "/>
                </div>
            </div>

            <div className='mx-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2'>
                <div className='bg-white p-5  border-2 rounded-md'>
                    <div className='flex justify-between pt-2 pb-4'>
                        <p className='text-gray-500'>Tasks Completed</p>
                         <FaRegCheckCircle className='text-blue-400 text-xl' />
                    </div>
                    <h3 className='font-bold text-xl pb-4' >24</h3>
                    <p className='text-sm text-green-600'>+12% from last week</p>
                </div>
                <div className='bg-white p-5  border-2 rounded-md'>
                    <div className='flex justify-between pt-2 pb-4'>
                        <p className='text-gray-500'>Current Streak</p>
                         <FaFireAlt className='text-blue-400 text-xl' />
                    </div>
                    <h3 className='font-bold text-xl pb-4' >24</h3>
                    <p className='text-sm text-green-600'>+12% from last week</p>
                </div>
                <div className='bg-white p-5  border-2 rounded-md'>
                    <div className='flex justify-between pt-2 pb-4'>
                        <p className='text-gray-500'>Monthly Progress</p>
                         <GiProgression className='text-blue-400 text-xl' />
                    </div>
                    <h3 className='font-bold text-xl pb-4' >24</h3>
                    <p className='text-sm text-green-600'>+12% from last week</p>
                </div>
                <div className='bg-white p-5  border-2 rounded-md'>
                    <div className='flex justify-between pt-2 pb-4'>
                        <p className='text-gray-500'>Active Goals</p>
                         <GoGoal className='text-blue-400 text-xl' />
                    </div>
                    <h3 className='font-bold text-xl pb-4' >24</h3>
                    <p className='text-sm text-green-600'>2 monthly objectives</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='rounded-md inset-shadow-xs bg-white m-6'>
                    <h3 className='font-medium p-4 border-b-2 '>Active Goals</h3>
                    <div className='m-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-medium '>Learn Web Development</h4>
                            <span className='bg-blue-100   text-blue-600 py-1 px-2 text-xs  rounded-full'>Active</span>
                        </div>
                        <div className='bg-gray-500 w-full h-2 rounded-full my-2 overflow-hidden'>
                               <div className='bg-gradient-to-t from-main to-secondary w-[56%] h-2 '></div>
                        </div>
                        <div>
                            <p className='text-gray-600 text-sm'>56% complete . <span>4 months remaining</span></p>
                        </div>
                    </div>
                    <div className='m-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-medium '>Learn Web Development</h4>
                            <span className='bg-blue-100   text-blue-600 py-1 px-2 text-xs  rounded-full'>Active</span>
                        </div>
                        <div className='bg-gray-500 w-full h-2 rounded-full my-2 overflow-hidden'>
                               <div className='bg-gradient-to-t from-main to-secondary w-[56%] h-2 '></div>
                        </div>
                        <div>
                            <p className='text-gray-600 text-sm'>56% complete . <span>4 months remaining</span></p>
                        </div>
                    </div>
                    <div className='m-4'>
                        <div className='flex justify-between'>
                            <h4 className='font-medium '>Learn Web Development</h4>
                            <span className='bg-blue-100   text-blue-600 py-1 px-2 text-xs  rounded-full'>Active</span>
                        </div>
                        <div className='bg-gray-500 w-full h-2 rounded-full my-2 overflow-hidden'>
                               <div className='bg-gradient-to-t from-main to-secondary w-[56%] h-2 '></div>
                        </div>
                        <div>
                            <p className='text-gray-600 text-sm'>56% complete . <span>4 months remaining</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </div>
    );
}

export default home;