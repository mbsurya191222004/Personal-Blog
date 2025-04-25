import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import BlogCard from "./components/BLogCard"

import { Routes,Route, useNavigate } from "react-router-dom"


function App() {

  return (
      <>
      
      <Routes>
      <Route path="/signup" element={<Signup/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/home" element={<Home/>} ></Route>
      </Routes>
    
      </>
    
  )
}

export default App
