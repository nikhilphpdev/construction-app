import React from 'react'

export const Hero = ({preHeading,heading,text}) => {
  return (
    <>
       {/* hero section */}
              <section className="section-7">
                <div className="hero d-flex align-items-center">
                  <div className="container">
                    <div className="text-left">
                      <span>{preHeading}</span>
                      <h1>{heading}</h1>
                      <p dangerouslySetInnerHTML={{__html:text}}>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              {/* hero section  close*/}
    </>
  )
}
