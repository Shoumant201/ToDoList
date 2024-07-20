import React from 'react'
import Menu from '../component/Menu'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div className='flex w-full h-screen '>
          <Menu/>
          <main className=' mt-4 mb-[25px] w-full '>
            <Outlet/>
          </main>
      </div>
  )
}

export default Layout
