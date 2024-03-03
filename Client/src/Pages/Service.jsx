import React from 'react'
import { useAuth } from '../Store/auth'

export default function Service() {
  const {services} = useAuth();


  return (
    <>
    <section className='section-services'>
      <div className='container'>
        <h1 className='main-heading'>Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {
          services.map((v,i)=>{
            return(
              <div className="card" >
          <div className="card-img">
            <img src="/images/design.png" alt="design-image" width="200" />
          </div>
          <div className="card-details">
            <div className="grid grid-two-cols">
            <p>{v.provider}</p>
            <p>{v.price}</p>
            </div>
            <h2>{v.service}</h2>
            <p>{v.description}</p>
          </div>
        </div> 
            )
          })
        }
       
        
        
      </div>

    </section>


      
    </>
  );
};
