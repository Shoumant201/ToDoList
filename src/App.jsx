import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Today from './pages/Today'
import Upcoming from './pages/Upcoming'
import Calendar from './pages/Calendar'
import StickyWall from './pages/StickyWall'
import Layout from './layout/Layout';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
              <Route index element={<Today/>}/>
              <Route path='/upcoming' element={<Upcoming/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/stickywall' element={<StickyWall/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
