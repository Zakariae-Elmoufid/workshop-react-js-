import React , {useState} from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import Button from './components/button';
import Task from './components/task';

function App() {

  const [isOpen , setIsOpen] = useState(false);
  const [tasks , setTasks] = useState([]);

  function openModal() {
     setIsOpen(true);
  }
  function closeModal() {
     setIsOpen(false);
  }

  function handlTask(newTask){
      setTasks([...tasks,newTask]);
      closeModal();
  }
 
  return (
    <div>
      <Button children="Add new task" onClick={openModal} className='m-6 p-2 bg-blue-600 text-white rounded-md' />
      <TodoForm  isOpen={isOpen}  onClose={closeModal}  addTask={handlTask}/>
      <Task tasks={tasks} />
    </div>
  );
}

export default App;
