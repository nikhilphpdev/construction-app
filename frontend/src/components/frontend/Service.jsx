import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Hero } from "../common/Hero";
import  ServiceImag from "../../assets/images/construction1.jpg";

export const Service = () => {
  return (
    <>
          <Header />
          <main>
          <Hero preHeading='Quality. Services. value'
                        heading='Service Us'
                        text='There are many variations of passages of Lorem Ipsum available, <br/>but the majority have suffered alteration in some form'
                    />
          
          <section className="section-3 bg-light">
                                 <div className="container py-5">
                                  <div  className="section-header text-center">
                                  <span>Our Services</span>
                                  <h2>Our constraction services</h2>
                                  <p>On the other hand, we denounce with righteous indignation and dislike men <br/>who are so beguiled and 
                                    demoralized by the charms.</p>
                                </div>
                                  <div className="row">
                                  <div className="col-md-4 colo-lg-4">
                                     <div className="item">
                                      <div className="service-image">
                                       <img src={ServiceImag} alt="" className="w-100" />
                                      </div>
                                      <div className="service-body">
                                        <div className="service-tilte">
                                          <h3>Specialty Constractions</h3>
                                        </div>
                                        <div className="service-content">
                                           <p>On the other hand, we denounce with righteous indignation and dislike men 
                                            who are so beguiled and demoralized by the charms</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Click Now</a>
                                      </div>
                                     </div>
                                  </div>
                                    <div className="col-md-4 colo-lg-4">
                                     <div className="item">
                                      <div className="service-image">
                                       <img src={ServiceImag} alt="" className="w-100" />
                                      </div>
                                      <div className="service-body">
                                        <div className="service-tilte">
                                          <h3>Specialty Constractions</h3>
                                        </div>
                                        <div className="service-content">
                                           <p>On the other hand, we denounce with righteous indignation and dislike men 
                                            who are so beguiled and demoralized by the charms</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Click Now</a>
                                      </div>
                                     </div>
                                  </div>
                                    <div className="col-md-4 colo-lg-4">
                                     <div className="item">
                                      <div className="service-image">
                                       <img src={ServiceImag} alt="" className="w-100" />
                                      </div>
                                      <div className="service-body">
                                        <div className="service-tilte">
                                          <h3>Specialty Constractions</h3>
                                        </div>
                                        <div className="service-content">
                                           <p>On the other hand, we denounce with righteous indignation and dislike men 
                                            who are so beguiled and demoralized by the charms</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Click Now</a>
                                      </div>
                                     </div>
                                  </div>
                                    <div className="col-md-4 colo-lg-4">
                                     <div className="item">
                                      <div className="service-image">
                                       <img src={ServiceImag} alt="" className="w-100" />
                                      </div>
                                      <div className="service-body">
                                        <div className="service-tilte">
                                          <h3>Specialty Constractions</h3>
                                        </div>
                                        <div className="service-content">
                                           <p>On the other hand, we denounce with righteous indignation and dislike men 
                                            who are so beguiled and demoralized by the charms</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Click Now</a>
                                      </div>
                                     </div>
                                  </div>
                                   <div className="col-md-4 colo-lg-4">
                                     <div className="item">
                                      <div className="service-image">
                                       <img src={ServiceImag} alt="" className="w-100" />
                                      </div>
                                      <div className="service-body">
                                        <div className="service-tilte">
                                          <h3>Specialty Constractions</h3>
                                        </div>
                                        <div className="service-content">
                                           <p>On the other hand, we denounce with righteous indignation and dislike men 
                                            who are so beguiled and demoralized by the charms</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Click Now</a>
                                      </div>
                                     </div>
                                  </div>
                                   <div className="col-md-4 colo-lg-4">
                                     <div className="item">
                                      <div className="service-image">
                                       <img src={ServiceImag} alt="" className="w-100" />
                                      </div>
                                      <div className="service-body">
                                        <div className="service-tilte">
                                          <h3>Specialty Constractions</h3>
                                        </div>
                                        <div className="service-content">
                                           <p>On the other hand, we denounce with righteous indignation and dislike men 
                                            who are so beguiled and demoralized by the charms</p>
                                        </div>
                                        <a href="#" className="btn btn-primary">Click Now</a>
                                      </div>
                                     </div>
                                  </div>
                                  </div>
                                 </div>
                        </section>
          <Footer />
          </main>
    </>
  );
};
