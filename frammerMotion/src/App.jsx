import React, { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [readonly, setReadonly] = useState(true)
  const[edit, setEdit] = useState([])
  useRef()

  function handleSubmit(e) {
    e.preventDefault(); 
    if (!task.trim()) return; 
    
    setTodos((prevTodos) => [...prevTodos, task]);
    setTask("");
  }

  function toggleReadOnly() {
    e.preventDefault();

    setReadonly((prev) =>  !prev)
    

  }

  return (
    <div className='flex justify-center items-center min-h-screen flex-col gap-6'>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder='Type your task'
          className='bg-gray-200 h-10 text-black rounded-xl p-3 outline-none selection:bg-gray-300'
        />
        <button
          type='submit'
          className='px-4 py-2 rounded-2xl bg-gray-500 text-white cursor-pointer'
        >
          Add
        </button>
      </form>

      <div className='flex flex-col gap-2 w-64'>
        {todos.map((val, i) => (
          <>
          <div className='flex'>
              <input value={val} key={i} readOnly = {readonly} className='bg-gray-200 h-10 text-black rounded-xl p-3 outline-none selection:bg-gray-300 -mr-15'/>
              <button className='px-4 py-2 rounded-2xl bg-gray-500 text-white cursor-pointer' onClick={toggleReadOnly}>edit</button>
              <button className='px-4 py-2 rounded-2xl bg-gray-500 text-white cursor-pointer'>delete</button>
          </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;