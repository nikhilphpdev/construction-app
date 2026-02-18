import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/frontend/Home";
import { About } from "./components/frontend/About";
import "./assets/css/style.scss";
import { Service } from "./components/frontend/Service";
import { Project } from "./components/frontend/Project";
import { Blog } from "./components/frontend/Blog";
import { ContactUs } from "./components/frontend/ContactUs";
import { Login } from "./components/backend/Login";
import { ToastContainer, toast } from "react-toastify";
import { Dashboard } from "./components/backend/Dashboard";
import { Show as ShowServices } from "./components/backend/services/Show";
import { Create as CreateService } from "./components/backend/services/Create";
import { Edit as EditService } from "./components/backend/services/Edit";
import { RequireAuth } from "./components/common/RequireAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />
           <Route
            path="/admin/services/Create"
            element={
              <RequireAuth>
                <CreateService />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/edit/:id"
            element={
              <RequireAuth>
                <EditService />
              </RequireAuth>
            }
          />
        </Routes>
        
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
