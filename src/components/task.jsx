import React from 'react';




function Task({tasks,onDelete}){

   function deleteItem(index){
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        onDelete(); 
   }

    return (
        <>
        <table className="table-auto mx-auto my-10 border border-black">
            <thead>
                <tr>
                    <th className="px-4 py-2 border border-red-500">task</th>
                    <th className="px-4 py-2 border border-red-500"> start</th>
                    <th className="px-4 py-2 border border-red-500">  end</th>
                    <th className="px-4 py-2 border border-red-500">actions</th>
                </tr>
            </thead>
            <tbody>
               {
                tasks.map((item , index) => (
                <tr>
                   <td className="px-4 py-2 border border-green-500">{index} -- {item.task}</td>
                   <td className="px-4 py-2 border border-green-500">{item.startDate}</td>
                   <td className="px-4 py-2 border border-green-500">{item.endDate}</td>
                   <td className="px-4 py-2 border border-green-500 "><button className='bg-red-600 p-2' onClick={ () => deleteItem(index)}>delete</button></td>
                </tr>
                ))
               }
            </tbody>
        </table>
        </>
    )
}

export default  Task; 