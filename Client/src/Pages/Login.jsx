import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/auth';

export default function Login() {
  const [user ,setUser] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();
  const {storeTokenInLS}  = useAuth();

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };

  const handleSubmit= async (e)=>{
    // form ki default property hoti toh to reload usko prevent krne ke liye hum e.prevent.deafult use krte hai
    e.preventDefault();
    console.log(user);
    // email :- mahak09@gmail.com
    // password :- mahak1234
    try{
      const response = await fetch(`http://localhost:5000/api/Auth/login`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(user),
     });
     console.log("login" ,response);

     const res_data = await response.json();

     if(response.ok){
      
      alert("login successful");
      storeTokenInLS(res_data.token);
      
      setUser({ email:"", password:""});
      navigate("/");
     }else{
      alert(res_data.extraDetails ? res_data.extraDetails : res_data.message);
     }
    
    }
     catch(error){
        console.log("login",error);
     }


  };

  return (
    <>
      <div className="section-login">
        <div className="container grid grid-two-cols">
            <div className="login-image">
              <img src="/images/login.png" alt="boyloginimage" title='image' width="500" height="400" />
            </div>
            <div className="login-form">
              <h1 className='main-heading' >Login From</h1>
              <br />
              <form onSubmit={handleSubmit}>
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
                     Sign In
                  </button>


              </form>
            </div>
        </div>
      </div>
    </>
  )
}
