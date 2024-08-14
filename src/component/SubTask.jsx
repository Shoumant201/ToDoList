import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const SubTask = ({ open, setOpen, onSave, task, setTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskList, setTaskList] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch saved tasks from local storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('savedData')) || [];
    setTasks(savedTasks);
  }, []);

  // Reset the form when a task is selected or when the form is opened
  useEffect(() => {
    if (open) {
      if (task) {
        setTaskName(task.taskName || "");
        setTaskDescription(task.taskDescription || "");
        setTaskList(task.taskList || "");
        setDueDate(task.dueDate || "");
      } else {
        // Clear form fields when no task is selected
        setTaskName("");
        setTaskDescription("");
        setTaskList("");
        setDueDate("");
      }
    }
  }, [task, open]);

  // Handle clicking "Add a new task"
  const handleAddNewTask = () => {
    setTask(null); // Clear selected task
    setTaskName("");
    setTaskDescription("");
    setTaskList("");
    setDueDate("");
    setOpen(true); // Open the form
  };

  // Save task data
  const saveData = () => {
    if (!taskName || !taskDescription) {
      alert('Enter task name and description');
      return;
    }

    const newTask = {
      id: task ? task.id : Date.now(), // Use existing task id if editing, otherwise generate a new one
      taskName,
      taskDescription,
      taskList,
      dueDate
    };

    const updatedTasks = task
      ? tasks.map(t => t.id === task.id ? newTask : t)
      : [...tasks, newTask];
    
    setTasks(updatedTasks);
    localStorage.setItem('savedData', JSON.stringify(updatedTasks));

    // Clear form fields and close the form
    setTaskName('');
    setTaskDescription('');
    setTaskList('');
    setDueDate('');
    setOpen(false);

    onSave();
  };

  // Delete task
  const deleteTask = () => {
    if (!task) return;

    const updatedTasks = tasks.filter(t => t.id !== task.id);
    setTasks(updatedTasks);
    localStorage.setItem('savedData', JSON.stringify(updatedTasks));

    // Clear form fields and close the form
    setTaskName('');
    setTaskDescription('');
    setTaskList('');
    setDueDate('');
    setTask(null); // Clear selected task
    setOpen(false);

    onSave();
  };

  return (
    <div className={`${open ? 'inline' : 'hidden'} ml-auto mr-[25px] p-[15px] bg-[#e6e6e6] rounded-[26px] relative`}>
      <div className='flex'>
        <p className='text-[25px] font-semibold'>Task:</p>
        <button><IoClose className='text-[30px] ml-[250px]' onClick={() => setOpen(false)} /></button>
      </div>
      <div className='border border-gray-300 mt-3 p-1 rounded-md'>
        <input
          type="text"
          placeholder='Task Name'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value.trim())}
          className='w-full h-[40px] appearance-none border-none bg-transparent focus:outline-none focus:ring-0'
        />
      </div>
      <div className='w-full border border-gray-300 p-2 rounded-md mt-3'>
        <textarea
          className='w-full appearance-none border-none bg-transparent focus:outline-none focus:ring-0 resize-none'
          rows='5'
          placeholder='Description'
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value.trim())}
        ></textarea>
      </div>
      <div className='flex mt-3'>
        <p className='w-[70px] mr-10'>List</p>
        <select
          className='border border-gray-300 rounded-md bg-transparent focus:outline-none'
          value={taskList}
          onChange={(e) => setTaskList(e.target.value)}
        >
          <option value='' disabled selected>Personal</option>
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </select>
      </div>
      <div className='flex mt-3'>
        <p className='w-[70px] mr-10'>Due Date</p>
        <input
          type='date'
          className='border border-gray-300 rounded-md bg-transparent focus:outline-none'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="mt-3 flex">
        <p className='w-[70px] mr-10'>Tags</p>
        <span className='py-[1px] px-[8px] rounded-[5px] bg-red-300 mr-2'>Tag 1</span>
        <span className='py-[1px] px-[8px] rounded-[5px] bg-gray-300 mr2'>+ Add Tag</span>
      </div>
      <div className='mt-4'>
        <p className='text-[30px] font-semibold'>Subtasks:</p>
        <button onClick={handleAddNewTask} className='flex border border-b-gray-300 w-full p-3 rounded-md'>
          <FaPlus className='m-1 mr-4' /> <span>Add a new task</span>
        </button>
        <div className='flex mt-3 ml-5'>
          <input type="checkbox" className='mr-4' />
          <p>Subtask</p>
        </div>
      </div>
      <div className='absolute bottom-0 mb-5 flex'>
        {task && (
          <button
            className='h-[40px] w-[155px] rounded-md mr-5 border border-gray-300 font-semibold'
            onClick={deleteTask}
          >
            Delete Task
          </button>
        )}
        <button
          className='h-[40px] w-[155px] rounded-md font-semibold bg-yellow-400'
          onClick={saveData}
        >
          Save changes
        </button>
      </div>
    </div>
  );
}

export default SubTask;
