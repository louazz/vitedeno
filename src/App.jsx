import './App.css';
import Nav from "./components/Nav.jsx";
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from "./pages/Search";
import Post from './pages/Post';
import Profile from './pages/Profile';
import Application from './pages/Application';
import Create from './pages/Create';
import { Worker } from '@react-pdf-viewer/core';
import View from './pages/View';


function App() {
  return (
    <><Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route path="login" element={<Login/>} />
        <Route index element={<Home/>} />
        <Route path="signup" element={<Signup/>}/>
        <Route path="search" element ={<Search/>}/>
        <Route path='post/:id' element={<Post/>} />
        <Route path='profile/:id' element={<Profile/>}/>
        <Route path='applications' element={<Application/>}/>
        <Route path='create' element={<Create/>} />
        <Route path='view/:id' element={<View/>} />
      </Route>

    </Routes>
    </BrowserRouter></Worker>
    </>
  )
}

export default App
