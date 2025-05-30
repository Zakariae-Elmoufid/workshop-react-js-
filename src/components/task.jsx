import React from 'react';




function Task({tasks}){

    return (
        <>
        <table className="table-auto mx-auto my-10 border border-black">
            <thead>
                <tr>
                    <th className="px-4 py-2 border border-red-500">task</th>
                    <th className="px-4 py-2 border border-red-500">date start</th>
                    <th className="px-4 py-2 border border-red-500"> date end</th>
                </tr>
            </thead>
            <tbody>
               {
                tasks.map((item) => (
                <tr>
                   <td className="px-4 py-2 border border-green-500">{item.task}</td>
                   <td className="px-4 py-2 border border-green-500">{item.startDate}</td>
                   <td className="px-4 py-2 border border-green-500">{item.endDate}</td>
                </tr>
                ))
               }
            </tbody>
        </table>
        </>
    )
}

export default  Task; 