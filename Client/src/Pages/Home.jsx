import React from 'react'

export default function Home() {
  return (
    <>
      <main className=''>
         <section className=' maindiv section-hero'>
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best IT study material</p>
                <h1>Welcome to Technical Classes</h1>
                <p>
                  Are you ready to take your knowledge to the next level With cutting-edge IT solutions? Look no further! At TechnicalClasses, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.
                  <div className="btn btn-group">
                    <a href="/contact">
                      <button className='btn'>connect Now</button>
                    </a>
                    <a href="/service">
                      <button className='btn secondary-btn'>learn more</button>
                    </a>
                  </div>
                </p>
              </div>
              {/*  */}
              <div></div>
            </div>
         </section>
        
         {/* sec section */}
         <section className='section-analytics'>
            <div className="container grid grid-four-cols">
              <div className='div1'>
                <h2>50+</h2>
                <p>Registered companies</p>
              </div>
              <div className='div1'>
                <h2>200,00+</h2>
                <p>Happy Clients</p>
              </div>
              <div className='div1'>
                <h2>500+</h2>
                <p>Well known Developers</p>
              </div>
              <div className='div1'>
                <h2>24/7</h2>
                <p>Service</p>
              </div>
            </div>

         </section>
           {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how  Technical classes can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>



      </main>
    </>
  )
}
