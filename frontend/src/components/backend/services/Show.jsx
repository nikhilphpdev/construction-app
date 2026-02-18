import React, { useEffect, useState } from "react";
import { Header } from "../../common/Header";
import { Footer } from "../../common/Footer";
import { Sidebar } from "../../common/Sidebar";
import { apiUrl, token } from "../../common/http";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export const Show = () => {
  const [services, setServices] = useState([]);   

  const fetchServices = async () => {
  try {
    const res = await fetch(apiUrl + "services", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      }
    });

    const result = await res.json();
    setServices(result.data.data);
  } catch (error) {
    console.log(error);
  }
};


const deleteService = async (id) => {
   if(confirm("Are you sure you want to delete ?")){
const res = await fetch(apiUrl + "services/"+id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      }
    });
    const result = await res.json();
     if(result.status == true){
      const newService = services.filter(service => service.id != id)
      setServices(newService);
      toast.success(result.message)
     }else{
      toast.error(result.message)
     }
   }
    

   };

useEffect(() => {
  fetchServices();
}, []);

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

                    <Link
                      to="/admin/services/Create"
                      className="btn btn-outline-info"
                    >
                      Create
                    </Link>
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
                        {services &&
                          services.map((service, index) => {
                            return (
                              <tr key={`service-${service.id}`}>
                                <th scope="row">{index + 1}</th>
                                <td>{service.title}</td>
                                <td>{service.slug}</td>
                                <td>{service.short_desc}</td>
                                <td>
                                  <span
                                    className={`badge ${
                                      service.status == 1
                                        ? "bg-success"
                                        : "bg-danger"
                                    }`}
                                  >
                                    {service.status == 1
                                      ? "Active"
                                      : "Inactive"}
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    to={`/admin/services/edit/${service.id}`}
                                    className="btn btn-warning btn-sm me-2"
                                  >
                                    Edit
                                  </Link>
                                  <Link  onClick={() => deleteService(service.id)} 
                                     to='#'
                                    className="btn btn-danger btn-sm"
                                  >
                                    Delete
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
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
0