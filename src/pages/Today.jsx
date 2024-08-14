import { useState, useEffect } from 'react';
import SubTask from '../component/SubTask'
import { FaPlus } from "react-icons/fa";
import ToDoCard from '../component/ToDoCard';


const Today = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState([]);
  const [save, setSaved] = useState(0);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    setTask(savedData);
  }, [save]);

  const handleSave = () => {
    setSaved(save => save + 1);
  };


  return (
    <>
      <div className='flex h-[100%]'>
        <div className='h-[100%] w-full'>
          <div className='mb-8 h-[6.5%]'>
            <span className='text-[30px] font-bold mr-5'>Today</span>
            <span className='text-[30px] border border-black px-4 py-1 rounded-md'>{task.length}</span>
          </div>
          <div className='flex h-[81%]'>
            <div className='w-full mx-5'>
              <button onClick={() => setOpen(!open)} className='flex border border-gray-300 w-full p-3 rounded-md'>
                <FaPlus className='m-1 mr-4' /> <span>Add a new task</span>
              </button>
              <div className='overflow-auto h-full'>
                {task.map((tasks) => (
                  <ToDoCard
                    key={tasks.id}
                    {...tasks}
                    open={open}
                    setOpen={setOpen}
                    onClick={() => {
                      setSelectedTask(tasks);
                      setOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <SubTask open={open} setOpen={setOpen} onSave={handleSave} task={selectedTask} />
      </div>
    </>
  );
};

export default Today;