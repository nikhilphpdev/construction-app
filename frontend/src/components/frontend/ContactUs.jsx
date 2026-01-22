import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Hero } from "../common/Hero";

export const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. value"
          heading="Contact Us"
          text="Neque porro quisquam est qui dolorem ipsum quia dolor sit
     <br/>                        amet, consectetur, adipisci velit."
        />

        <section className="section-9 bg-light">
          <div className="container py-5">
            < div className="section-header text-center">
              <span>Contact Us </span>
              <h2>Get In Touch</h2>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men{" "}
              </p>
            </div>
            <div className="row ">
              <div className="col-md-3 ">
                <div className="card shadow borer-0 text-center mb-2">
                  <div className="card-body p-4">
                    <h3>Can Us</h3>
                    <div>
                      <a href="#">(888-000-00000)</a>
                    </div>
                    <div>
                      {" "}
                      <a href="#">(123-456-00000)</a>
                    </div>

                    <h3 className="mt-4">Can You Write Us</h3>
                    <div>
                      {" "}
                      <a href="#">(exmaple#example.com)</a>
                    </div>
                    <div>
                      <a href="#">(info@example.com)</a>
                    </div>

                    <h3 className="mt-4">Address Us</h3>
                    <div>
                      <p>who are so beguiled and demoralized by the charms</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow borer-0">
                  <div className="card-body p-3">
                  <form action="">
                    <div className="row">
                      <div className="col-md-6">
                         <div className="form-group mt-2">
                         <label htmlFor="" className="form-label">Name</label>
                         <input type="text" className="form-control " id="name"  placeholder="Enter name" />
                         </div>
                          <div className="form-group mt-2">
                          <label htmlFor="" className="form-label">Email</label>
                         <input type="text" className="form-control " id="email"  placeholder="Enter Email" />
                         </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group mt-2">
                          <label htmlFor="" className="form-label">Phone</label>
                         <input type="text" className="form-control " id="email"  placeholder="Enter Email" />
                         </div>
                          <div className="form-group mt-2">
                          <label htmlFor="" className="form-label">Subject</label>
                         <input type="text" className="form-control " id="email"  placeholder="Enter Email" />
                         </div>
                      </div>
                       <div className="form-group mt-2">
                          <label htmlFor="" className="form-label">Massage</label>
                         <textarea  type="text" className="form-control " id="email"  rows="5" placeholder="Enter Message" />
                         </div>
                         <div className="form-group mt-3">
                          <button type="button" className="btn btn-primary">Submit</button>
                         </div>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
