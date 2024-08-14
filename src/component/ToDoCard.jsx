import React, {useEffect, useState} from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCalendarAlt  } from "react-icons/fa";

const ToDoCard = ({id, taskName, taskDescription, dueDate, open, setOpen, onClick}) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const isChecked = localStorage.getItem(id);
    if (isChecked !== null) {
      setCheck(isChecked === 'true');
    }
  }, [id]);

  const handleOnChange = () => {
    const newCheck = !check;
    setCheck(newCheck);
    localStorage.setItem(id, newCheck.toString());
  };

  return (
    <div className='p-5 flex-col w-full border-solid border-b-2'>
      <div className='flex items-center w-full'>
        <input type="checkbox" checked={check} onChange={handleOnChange}/>
        <div 
          onClick={() => {
            onClick();  // Call the passed `onClick` function
            setOpen(!open);
          }} 
          className='flex w-full cursor-pointer'>
          <p className='ml-3'>{taskName}</p>
          <MdKeyboardArrowRight className='ml-auto text-[20px]'/>
        </div>
      </div>
      <div className='flex mt-1 text-[10px] font-bold mr-3'>
        {dueDate && (
          <>
            <FaCalendarAlt className='text-[15px] mr-2'/>
            {dueDate}
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoCard;