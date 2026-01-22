import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Hero } from "../common/Hero";
import  BlogImag from "../../assets/images/construction3.jpg";

export const Blog = () => {
  return (
    <>
      <Header />
      <main>
         <Hero preHeading='Quality. Integrity. value'
                      heading='Blog '
                      text='Neque porro quisquam est qui dolorem ipsum quia dolor sit
        <br/>                        amet, consectetur, adipisci velit.'
                  />

                  <section className="section-6  bg-light py-5">
                                  <div className="container">
                                    <div  className="section-header text-center">
                                          <span>Blog & News</span>
                                          <h2>Artical Blog services</h2>
                                          <p>On the other hand, we denounce with righteous indignation and dislike men <br/>who are so beguiled and 
                                            demoralized by the charms.</p>
                                        </div>
                                      <div className="row pt-3  ">
                                        <div className="col-md-4">
                                          <div className="card shadow border-0">
                                            <div className="card-img-top">
                                                <img src={BlogImag} className="w-100" alt="" />
                                            </div>
                                            <div className="card-body p-4">
                                               <div className="mb-2">
                                                <a href="#" className="title">Dummy blog title</a>
                                               </div>
                                               <a href="#" className="btn btn-primary">Read more..</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="card shadow border-0">
                                            <div className="card-img-top">
                                                <img src={BlogImag} className="w-100" alt="" />
                                            </div>
                                            <div className="card-body p-4">
                                               <div className="mb-2">
                                                <a href="#" className="title">Dummy blog title</a>
                                               </div>
                                               <a href="#" className="btn btn-primary">Read more..</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="card shadow border-0">
                                            <div className="card-img-top">
                                                <img src={BlogImag} className="w-100" alt="" />
                                            </div>
                                            <div className="card-body p-4">
                                               <div className="mb-2">
                                                <a href="#" className="title">Dummy blog title</a>
                                               </div>
                                               <a href="#" className="btn btn-primary">Read more..</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="card shadow border-0">
                                            <div className="card-img-top">
                                                <img src={BlogImag} className="w-100" alt="" />
                                            </div>
                                            <div className="card-body p-4">
                                               <div className="mb-2">
                                                <a href="#" className="title">Dummy blog title</a>
                                               </div>
                                               <a href="#" className="btn btn-primary">Read more..</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="card shadow border-0">
                                            <div className="card-img-top">
                                                <img src={BlogImag} className="w-100" alt="" />
                                            </div>
                                            <div className="card-body p-4">
                                               <div className="mb-2">
                                                <a href="#" className="title">Dummy blog title</a>
                                               </div>
                                               <a href="#" className="btn btn-primary">Read more..</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-4">
                                          <div className="card shadow border-0">
                                            <div className="card-img-top">
                                                <img src={BlogImag} className="w-100" alt="" />
                                            </div>
                                            <div className="card-body p-4">
                                               <div className="mb-2">
                                                <a href="#" className="title">Dummy blog title</a>
                                               </div>
                                               <a href="#" className="btn btn-primary">Read more..</a>
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

