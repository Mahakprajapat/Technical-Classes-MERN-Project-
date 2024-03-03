import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/auth';

export default function Register() {
  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();

  const handleInput=(e)=>{
   let name = e.target.name;
   let value = e.target.value;

   setUser({
      ...user,
      [name]:value,
      // dynicma value qki name me username,email,password,phone ki values aayenge toh humko dynmice value use krni hoti hain of name []
   });
  };
  
  // handling the form submission
    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(user);
      try{
        const response = await fetch(`http://localhost:5000/api/Auth/register`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(user),
       });

       const res_data = await response.json();
       console.log("res from server",res_data.extraDetails);

       if(response.ok){
        // stored the token in localhost
        storeTokenInLS(res_data.token);
        setUser({
          username:"",
          email:"",
          phone:"",
          password:"",
        });
        navigate("/");
       }
       else{
        alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
       }
       console.log(response);
      }
       catch(error){
          console.log("register",error);
       }

       
    };

  return (
    <>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
                <img src="/images/register.png" alt="register-img" title="image-register" width="500" height="400" />
            </div>
            <div className="registration-form">
              <h1 className='main-heading mb-3'>Registration Form</h1>
              <br />
              {/* form section */}
              <form onSubmit={handleSubmit} >
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                      id='username'
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                      id='email'
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder='phone-number'
                      id='phone'
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                      id='password'
                      required
                      autoComplete='off'
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
