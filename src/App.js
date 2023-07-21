import './App.css';
import ToDoForm from './components/Todo-form';
import Todo from './components/Todo';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  

  const addTask = (newTask) =>{
    console.log(newTask)
    setTasks(currentTask => ([...currentTask, newTask]))
  }

  const deleteTask = id => {
    let left = tasks.slice(0,id)
    let right = tasks.slice(id+1)
    setTasks(left.concat(right))
  }

  return (
    <div className="App">
      <ToDoForm addFunction = {addTask} />
      {tasks.map((task, i)=>{
        return(
        < Todo 
        id={i} 
        task={task} 
        deleteFunction = {deleteTask}
        />)})}
    </div>
  );
}

export default App;
