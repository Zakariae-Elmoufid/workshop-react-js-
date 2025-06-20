import  React ,{useState} from "react";
import Button from './button'


function TodoForm({isOpen,onClose , onAdd }){
    
    const  [startDate , setStartDate]  = useState('');
    const [endDate , setEndDate]  = useState('');
    const [task , setTask]  = useState('');
    
    if(!isOpen) return null;
    function handlSubmit(e){
         e.preventDefault();
        const newTask = {
            startDate,
            endDate,
            task
         };
         const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
         const updatedTasks = [...existingTasks, newTask];

         localStorage.setItem('tasks',JSON.stringify(updatedTasks));
         onAdd();
    }


     
    return (
     <form  onSubmit={handlSubmit} className="w-80 mx-auto my-10 p-10 bg-gray-200" > 
        <div className="flex flex-col ">
          <label htmlFor="">Start Date</label>
          <input type="time"
           className="border border-black p-2 rounded-lg"  
           onChange={ (e) => setStartDate(e.target.value) }/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">End Date</label>
          <input type="time"
           className="border border-black p-2 rounded-lg"
           onChange={ (e) => setEndDate(e.target.value) }/>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">what do you do </label>
          <input type="text"
           className="border border-black p-2 rounded-lg" 
           placeholder="to do ..."
           onChange={ (e) => setTask(e.target.value) }/>
        </div>
        <div className="flex justify-between">
        <Button  children="add to list"  className="p-2 my-4 bg-green-600 rounded-md" type="submit"/>
        <Button children="Cancele" onClick={onClose} className="p-2 my-4 bg-red-600 rounded-md"/>   
        </div>
     </form>
    );
}

export default TodoForm;