import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import Abc from './components/Abc'
import Signup from './components/Signup'
import Landing from './components/Landing';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Navbar/>} >
<Route index element={<Landing/>} />
<Route path="/login" element={<Abc/>} />
<Route path="/Signup" element={<Signup/>} />
</Route>

</Routes>


</BrowserRouter>
    </>
  )
}

export default App