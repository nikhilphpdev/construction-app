import React from 'react'
import AboutImag from "../../assets/images/about-us.jpg";
export const About = () => {
  return (
   <>
   
   <section className="section-2 py-5">
             <div className="container ">
               <div className="row">
                 <div className="col-md-6">
                   <img src={AboutImag} className="w-100" />
                 </div>
                 <div className="col-md-6">
                   <span>About Us</span>
                   <h2>1914 translation by H. Rackham.</h2>
                   <p>
                     But I must explain to you how all this mistaken idea of
                     denouncing pleasure and praising pain was born and I will give
                     you a complete account of the system,and expound the actual
                     teachings of the great explorer of the truth, the
                     master-builder of human happiness.
                   </p>
                   <p>
                     On the other hand, we denounce with righteous indignation and
                     dislike men who are so beguiled and demoralized by the charms
                   </p>
                 </div>
               </div>
             </div>
           </section>
   </>
  )
}
