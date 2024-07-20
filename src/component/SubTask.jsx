import React, {useEffect, useState} from 'react'
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const SubTask = ({open, setOpen}) => {
  const [taskName, setName] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskList, setList] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [task,setTask] =useState([]);
 //usecontext usereducer
  const saveData = () => {
    const savedData = {
      taskName,
      taskDescription,
      taskList,
      dueDate,
    };
    if (!taskName || !taskDescription) {
      alert('Enter task name and description');
    } else {
      localStorage.setItem('savedData', JSON.stringify(savedData));
    }
    
  }
  return (
    <div className={` ${open? ' inline' : ' hidden'} ml-auto mr-[25px] p-[15px] bg-[#e6e6e6] rounded-[26px] relative`}>
      <div className='flex'>
        <p className='text-[25px] font-semibold'>Task:</p>
        <button><IoClose className='text-[30px] ml-[250px]' onClick={() => setOpen(!open)}/></button>
      </div>
      <div className='border border-gray-300 mt-3 p-1 rounded-md'>
        <input 
          type="text" 
          placeholder='Task Name' 
          value={taskName}
          onChange={(e)=>setName(e.target.value.trim())}
          className='w-full h-[40px] appearance-none border-none bg-transparent focus:outline-none focus:ring-0'/>
      </div>
      <div className='w-full border border-gray-300 p-2 rounded-md mt-3'>
        <textarea
          className='w-full appearance-none border-none bg-transparent focus:outline-none focus:ring-0 resize-none'
          rows='5'
          placeholder='Description'
          value={taskDescription}
          onChange={(e)=>setDescription(e.target.value.trim())}
        ></textarea>
      </div>
      <div className='flex mt-3'>
        <p className='w-[70px] mr-10'>List</p>
        <select 
          className='border border-gray-300 rounded-md bg-transparent focus:outline-none'
          value={taskList}
          onChange={(e)=>setList(e.target.value)}
        >
          <option value='' disabled selected>Personal</option>
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </select>
      </div>
      <div className='flex mt-3'>
        <p className='w-[70px] mr-10'>Due Date</p>
        <select 
          className='border border-gray-300 rounded-md bg-transparent focus:outline-none'
          value={dueDate}
          onChange={(e)=>setDueDate(e.target.value)}
        >
          <option value='' disabled selected>11-03-22</option>
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </select>
      </div>
      <div className="mt-3 flex">
        <p className='w-[70px] mr-10'>Tags</p>
        <span className='py-[1px] px-[8px] rounded-[5px] bg-red-300 mr-2'>Tag 1</span>
        <span className='py-[1px] px-[8px] rounded-[5px] bg-gray-300 mr2'>+ Add Tag</span>
      </div>
      <div className='mt-4'>
        <p className='text-[30px] font-semibold'>Subtasks:</p>
        <button onClick={() => setOpen(!open)} className='flex border border-b-gray-300 w-full p-3 rounded-md'> <FaPlus className='m-1 mr-4'/> <span>Add a new task</span> </button>
        <div className='flex mt-3 ml-5'>
          <input type="checkbox" className='mr-4' />
          <p>Subtask</p>
        </div>
      </div>
      <div className='absolute bottom-0 mb-5 flex'>
        <button className='h-[40px] w-[155px] rounded-md mr-5 border border-gray-300 font-semibold'>Delete Task</button>
        <button className='h-[40px] w-[155px] rounded-md font-semibold bg-yellow-400' onClick={saveData}>Save changes</button>
      </div>
  
    </div>
  )
}

export default SubTask
