import react from "react";
import { DiCelluloid } from "react-icons/di";
import { CiCalendar } from "react-icons/ci";
import  Button from "../components/button";
import { FaXmark } from "react-icons/fa6";



    const categories = [, "Education", "Health", "Personal Growth", "Career"];


function goalForm({isOpen,onClose}){
    
    if(!isOpen) return null;

    return(
        
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
          <div className="flex justify-between items-center">
               <h2 class="text-xl font-semibold mb-4">Create New Goal</h2>
               <FaXmark onClick={onClose} className="text-red-500"/>
          </div>  
        <form >
            <div className="mb-4">
                <label  className="block font-semibold text-black-700 mb-1">Goal Title</label>
                <input type="text" className="border p-2 border-main rounded-md w-full" />
            </div>
            <div className="mb-4">
                <label  className="block font-semibold text-black-700 mb-1" htmlFor="">Description</label>
                <input type="text" className="border p-2 border-main rounded-md w-full" />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-2">
                <div>
                    <label className="block font-semibold text-black-700 mb-1" htmlFor="">Category</label>
                     <select name="" id="" className="border p-2 border-main rounded-md w-full">
                    {categories.map((category) => ( 
                        <option value="">{category}</option>
                    ))} 
                     </select>
                </div>
                <div>
                    <label className="block font-semibold text-black-700 mb-1" htmlFor="">Priority</label>
                    <select name="" className="border p-2 border-main rounded-md w-full">
                        <option value="">Low Priority</option>
                        <option value="">Medium Priority</option>
                        <option value="">High Priority</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                  <label className="block font-semibold text-black-700 mb-1" htmlFor=""><CiCalendar className="inline mr-2 text-2xl"  />Target Date</label>
                  <input type="date" className="border p-2 border-main rounded-md w-full" />
            </div>
            <div className="text-end gap-2">
                <Button onClick={onClose} children="Cancel" className="py-2 px-4   bg-slate-100 font-semibold border rounded-md mr-2" />
                <Button children="Create Goale" className="py-2 px-4 border rounded-md text-white font-semibold bg-gradient-to-tr  from-main to-secondary" />
            </div>
        </form>
       </div>
      </div>
    );
}
export default goalForm;