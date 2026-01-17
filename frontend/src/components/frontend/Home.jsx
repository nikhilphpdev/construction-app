import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

import  ServiceImag from "../../assets/images/construction1.jpg";
import  ConstructionImg from "../../assets/images/construction2.jpg";
import  BlogImag from "../../assets/images/construction3.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AvatarImg from "../../assets/images/author-2.jpg";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { About } from "../common/About";

export const Home = () => {
  return (
    <>
      <Header/>
      <main>
        {/* hero section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Constractions</span>
                <h1>
                  Crafting dreams with
                  <br />
                  precision and excellence.
                </h1>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit.
                  <br />
                  There is no one who loves pain itself, who seeks after it and
                  wants to have it
                </p>

                <div className="mt-2">
                  <a className="btn btn-primary large ">Contact Now</a>
                  <a className="btn btn-secondry large ms-2">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero section  close*/}

       {/* About section */}
         <About/>
           
              <section className="section-3 bg-light">
                       <div className="container-fluid py-5">
                        <div  className="section-header text-center">
                        <span>Our Services</span>
                        <h2>Our constraction services</h2>
                        <p>On the other hand, we denounce with righteous indignation and dislike men <br/>who are so beguiled and 
                          demoralized by the charms.</p>
                      </div>
                        <div className="row">
                        <div className="col-md-3 colo-lg-3">
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
                          <div className="col-md-3 colo-lg-3">
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
                          <div className="col-md-3 colo-lg-3">
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
                          <div className="col-md-3 colo-lg-3">
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

                 {/* Why Choose Us Section */}
              <section className="section-4">
                <div className="container">
                     <div className="section-header text-center">
                      <span>Why Choose us</span>
                      <h2>The standard Lorem Ipsum passage</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut <br/>labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                     </div>
                     <div className="row pt-4">
                      <div className="col-md-4">
                          <div className="card shadow border-0 p-4">
                                 <div className="card-icon">
                                     <img src={ Icon1 }  alt="" />
                                 </div>
                                 <div className="card-title mt-3">
                                     <h3>The standard Lorem Ipsum passage</h3>
                                 </div>
                                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                  accusantium doloremque laudantium, totam rem aperiam,
                                   eaque ipsa quae ab illo inventore veritatis</p>
                          </div>
                      </div>
                       <div className="col-md-4">
                          <div className="card shadow border-0 p-4">
                                 <div className="card-icon">
                                     <img src={ Icon2 }  alt="" />
                                 </div>
                                 <div className="card-title mt-3">
                                     <h3>The standard Lorem Ipsum passage</h3>
                                 </div>
                                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                  accusantium doloremque laudantium, totam rem aperiam,
                                   eaque ipsa quae ab illo inventore veritatis</p>
                          </div>
                      </div>
                       <div className="col-md-4">
                          <div className="card shadow border-0 p-4">
                                 <div className="card-icon">
                                     <img src={ Icon3 }  alt="" />
                                 </div>
                                 <div className="card-title mt-3">
                                     <h3>The standard Lorem Ipsum passage</h3>
                                 </div>
                                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                  accusantium doloremque laudantium, totam rem aperiam,
                                   eaque ipsa quae ab illo inventore veritatis</p>
                          </div>
                      </div>
                     </div>
                </div>
              </section>
              
              {/* Testimonial section */}
              <section className="section-5  py-5">
                     <div className="container">
                        <div  className="section-header text-center">
                        <span>Tstimonials are positive statements </span>
                        <h2>Our Tstimonials services</h2>
                        <p>On the other hand, we denounce with righteous indignation and dislike men <br/>who are so beguiled and 
                          demoralized by the charms.</p>
                      </div>
                     <Swiper
                      spaceBetween={50}
                      slidesPerView={3}
                      modules={[ Pagination]}
                        pagination={{ clickable: true }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide>
                        <div className="card shadow border-0">
                             <div className="card-body p-5">
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                         </svg>
                              </div>
                              <div className=" content pt-4 pb-2">
                                         <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         </p>
                                        </div>
                                        <hr/>
                                        <div className="d-flex meta">
                                          <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                          </div>
                                          <div className="ps-3">
                                            <div className="name"> Jon Deo</div>
                                            <div>SEO</div>
                                          </div>
                                        </div>
                             </div>
                        </div>
                      </SwiperSlide>
                        <SwiperSlide>
                        <div className="card shadow border-0">
                             <div className="card-body p-5">
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                         </svg>
                              </div>
                              <div className=" content pt-4 pb-2">
                                         <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         </p>
                                        </div>
                                        <hr/>
                                        <div className="d-flex meta">
                                          <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                          </div>
                                          <div className="ps-3">
                                            <div className="name"> Jon Deo</div>
                                            <div>SEO</div>
                                          </div>
                                        </div>
                             </div>
                        </div>
                      </SwiperSlide>
                        <SwiperSlide>
                        <div className="card shadow border-0">
                             <div className="card-body p-5">
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                         </svg>
                              </div>
                              <div className=" content pt-4 pb-2">
                                         <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         </p>
                                        </div>
                                        <hr/>
                                        <div className="d-flex meta">
                                          <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                          </div>
                                          <div className="ps-3">
                                            <div className="name"> Jon Deo</div>
                                            <div>SEO</div>
                                          </div>
                                        </div>
                             </div>
                        </div>
                      </SwiperSlide>
                       <SwiperSlide>
                        <div className="card shadow border-0">
                             <div className="card-body p-5">
                              <div className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                         </svg>
                              </div>
                              <div className=" content pt-4 pb-2">
                                         <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                         </p>
                                        </div>
                                        <hr/>
                                        <div className="d-flex meta">
                                          <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                          </div>
                                          <div className="ps-3">
                                            <div className="name"> Jon Deo</div>
                                            <div>SEO</div>
                                          </div>
                                        </div>
                             </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                      </div>
              </section>

              {/* Blog */}
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
                      
                    </div>
                </div>
              </section>
 
      </main>
     <Footer/>
    </>
  );
};

export default Home;
