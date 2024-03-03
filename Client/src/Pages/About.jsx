import React from 'react';
import { useAuth } from '../Store/auth';

export default function About() {
  const {user} = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Welcome, {user ? user.username: ` to our website`} </p>
              <h1>Why Choose Us ?</h1>
              <p>
                Are you ready to take your business to the next level with cutting-edge IT solutions? 
              </p>
                <p>Affordability: we offer cometittive pricing without compromising on the quality of our servies</p>
                <p>Relibaility:Count on us to be there when you need us we're committed to ensuring your IT environment is reliable and avaiable 24/7</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* sec section */}
      <section className='section-analytics'>
            <div className="container grid grid-four-cols">
              <div className='div1'>
                <h2>50+</h2>
                <p>companies Registered</p>
              </div>
              <div className='div1'>
                <h2>150+</h2>
                <p>Project Done</p>
              </div>
              <div className='div1'>
                <h2>250+</h2>
                <p>Happy Client</p>
              </div>
              <div className='div1'>
                <h2>650+</h2>
                <p>Followers</p>
              </div>
            </div>

         </section>
    </>
  )
}
