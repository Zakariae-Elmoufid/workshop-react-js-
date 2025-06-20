import React , {useState , useEffect} from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import Button from './components/button';
import Task from './components/task';
import { paste } from '@testing-library/user-event/dist/paste';

function App() {

  const [isOpen , setIsOpen] = useState(false);
  const [tasks , setTasks] = useState([]);

  function openModal() {
     setIsOpen(true);
  }
  function closeModal() {
     setIsOpen(false);
  }


 useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  setTasks(storedTasks);
}, []);

  function refreshTasks() {
    const updatedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(updatedTasks);
    openModal()
  }
  return (
    <div>
      <Button children="Add new task" onClick={openModal} className='m-6 p-2 bg-blue-600 text-white rounded-md' />
      <TodoForm  isOpen={isOpen}  onClose={closeModal} onAdd={refreshTasks}  />
      <Task tasks={tasks} onDelete={refreshTasks}/>
    </div>
  );
}

export default App;
