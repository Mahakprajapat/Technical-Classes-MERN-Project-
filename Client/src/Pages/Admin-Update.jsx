import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../Store/auth';

export default function AdminUpdate() {

    const [data,setData] = useState({
        username:"",
        email:"",
        phone:"",
    });
    // params :- to get the id of user form the URL
    const params = useParams();

    // authorizationToken:- to get the TOKEN of the user to verfify about the admin
    const {authorizationToken} = useAuth();
    
    // get single user data for update
    const getSingleUserData= async (id)=>{
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });
                const data = await response.json();
                  console.log("USER-singleupadte", data);
                  setData(data);
    };
    



    useEffect(()=>{
        getSingleUserData();
    },[]);

    const handleInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setData({
        ...data,
        [name]:value,
      });
    };

    // to update the data dynamically

    const handleSubmit= async (e)=>{
      e.preventDefault();
      try{
        const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(data),
                }
               
                );
                if(response.ok){
                  alert("data updated successfully");
                
                }else{
                  alert("not updated");
                }
                Navigate("/users")
      }catch(error){
        console.log(error);
      }
    };

  return (
    <>
    <div className="section-contact">
        <div className="contact-content container">
          <h1 className='main-heading ' style={{margin:"10px"}}>Update user's Data</h1>
        </div>
        <div className="container grid grid-two-cols">
          

          <div className="contact-form">
            <form onSubmit={handleSubmit} >
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  value={data.username}
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
                  value={data.email}
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
                  type="phone"
                  name="phone"
                  value={data.phone}
                  onChange={handleInput}
                  placeholder="phone"
                  id='phone'
                  required
                  autoComplete='off'
                />
              </div>

              
              <br />
              <button type="submit" className="btn btn-submit">
                Update
              </button>


            </form>
          </div>
        </div>
      </div>

    </>
  )
}
