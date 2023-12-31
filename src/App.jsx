import {Route, Routes} from 'react-router-dom'
import Room from './pages/Room/Room'

import './App.css'
import Home from './pages/Home/Home'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomId' element={<Room/>}/>
    </Routes>
  )
}

export default App
