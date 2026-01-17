import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Home } from "./components/frontend/Home";
import { About } from "./components/frontend/About";
import './assets/css/style.scss'
import { Service } from "./components/frontend/Service";
import { Project } from "./components/frontend/Project";
import { Blog } from "./components/frontend/Blog";
import { ContactUs } from "./components/frontend/ContactUs";

function App() {


  return (
    <>
       <BrowserRouter>
          <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/service' element={<Service/>} />
               <Route path='/project' element={<Project/>} />
               <Route path='/blog' element={<Blog/>} />
               <Route path="/contactUs" element={<ContactUs/>}  />
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
