import {useState} from 'react'
import { NavLink, } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { VscChecklist, VscSettings } from "react-icons/vsc";
import { FaCalendarAlt, FaSignOutAlt, FaStickyNote, FaPlus  } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCheckboxBlankFill } from "react-icons/ri";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`'${open? ' inline' : ' hidden'} px-[60px] pt-[18px] m-[25px] '`}>
        <button className='text-[24px] ' onClick={() => setOpen(!open)}><IoMenu/></button>
      </div>
      <div className={`'${open? ' hidden' : ' block'} rounded-[26px]  bg-[#e6e6e6] p-[15px] relative m-[25px] '`}>
              <div className='flex'>
                <p className='font-bold text-[22px]'>MENU</p>
                <button className='text-[24px] ml-[150px]' onClick={() => setOpen(!open)}><IoMenu/></button>
              </div>
              <div className='relative flex w-[100%] h-[30px] p-[5px] border border-gray-300 rounded-[5px] mt-[20px] '>
                <IoIosSearch className='absolute top-[7px]'/>
                <input className='appearance-none border-none bg-transparent focus:outline-none focus:ring-0 placeholder-gray-500 text-gray-900 w-[100%] disabled:cursor-not-allowed pl-[17px]' type="text" placeholder='Search'/>
              </div>
              <div className='border border-b-black pb-[15px]'>
                <ul className='mt-[30px]'>
                <p className='mb-[5px]'>Tasks</p>
                <li className='pl-[6px] h-[30px] rounded-[5px]'><NavLink to='/upcoming' className='current:bg-[#6c6b6bcc]'><MdKeyboardDoubleArrowRight className='inline-block mr-2'/> Upcoming</NavLink></li>
                <li className='pl-[6px] h-[30px] rounded-[5px]'><NavLink to='/' className='current:bg-[#6c6b6bcc]'><VscChecklist className='inline-block mr-2'/> Today</NavLink></li>
                <li className='pl-[6px] h-[30px] rounded-[5px]'><NavLink to='/calendar' className='current:bg-[#6c6b6bcc]'><FaCalendarAlt className='inline-block mr-2'/> Calendar</NavLink></li>
                <li className='pl-[6px] h-[30px] rounded-[5px]'><NavLink to='/stickywall' className='current:bg-[#6c6b6bcc]'><FaStickyNote className='inline-block mr-2'/> Sticky Wall</NavLink></li>
                </ul>
              </div>
              <div className='pt-[10px]'>
                <p>Lists</p>
                <div className='pl-[6px] border border-b-black pb-[15px]'>
                  <ul className='space-y-2'>
                    <li>
                      <RiCheckboxBlankFill className='text-red-500 inline-block text-[20px] mr-3'/>
                      Personal
                    </li>
                    <li>
                      <RiCheckboxBlankFill className='text-cyan-500 inline-block text-[20px] mr-3'/>
                      Work
                    </li>
                    <li>
                      <RiCheckboxBlankFill className='text-yellow-500 inline-block text-[20px] mr-3'/>
                      List1
                    </li>
                    <li>
                      <FaPlus className='inline-block mr-3'/>
                      Add a new list
                    </li>
                  </ul>
                </div>
              </div>
              <div className='pt-[10px]'>
                  <p className='mb-[5px]'>Tags</p>
                  <span className='py-[1px] px-[8px] rounded-[5px] bg-red-300 mr-2'>Tag 1</span>
                  <span className='py-[1px] px-[8px] rounded-[5px] bg-blue-300 mr-2'>Tag 2</span>
                  <span className='py-[1px] px-[8px] rounded-[5px] bg-gray-300 mr2'>+ Add Tag</span>
              </div>
              <div className='absolute bottom-0 pb-10 space-y-2'>
                <div><VscSettings className='inline-block mr-2'/>Settings</div>
                <div> <FaSignOutAlt className='inline-block mr-2' />Sign Out</div>
              </div>
      </div>
    </>
  )
}

export default Menu
