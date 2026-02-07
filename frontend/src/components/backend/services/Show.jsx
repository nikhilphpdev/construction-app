import React, { useEffect, useState } from "react";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";
import { Sidebar } from "../../common/Sidebar";
import { apiUrl, token } from "../../common/http";
import { Link } from "react-router-dom";
export const Show = () => {
  
   const [services , setServices] = useState([]);

   const fetchServices = async () => {
    const res = await fetch(apiUrl+'services',{
            'method': 'GET',
            'headers':{ 
              'Content-type': 'application/json',
              'Accept'      : 'application/json',
              'Authorization': `Bearer ${token()}`
            }
    });
    const result = await res.json();
    setServices(result.data.data);
    //console.log(result.data);
   }

   useEffect(() => {
    fetchServices();
   });

  return (
    <>
      <Header />

      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {/* Sidebard */}
              <Sidebar />
            </div>
            <div className="col-md-9 dashboard">
              {/* Dashboard */}
              <div className="card shadow border-0">
                <div className="card-body ">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Services</h4>
                    
                     <Link to="/admin/services/Create" className="btn btn-outline-info">Create</Link>
                  </div>
                  <div className="mt-4">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Slug</th>
                          <th scope="col">Short Desc</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          
                          services && services.map((service, index) => {

                            return (
                              <tr key={service.id} >
                                <th scope="row">{index +1}</th>
                                <td>{service.title}</td>
                                <td>{service.slug}</td>
                                <td>{service.content}</td>
                               <td>
                                <span className={`badge ${service.status == 1 ? "bg-success" : "bg-danger"}`}>
                                  {service.status == 1 ? "Active" : "Inactive"}
                                </span>
                              </td>
                                 <td> 
                                  <Link to="#" className="btn btn-warning btn-sm me-2">Edit</Link>
                                    <Link to="#" className="btn btn-danger btn-sm">Delete</Link> 
                          </td>
                              </tr>
                            )
                          })
                          
                        }
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
