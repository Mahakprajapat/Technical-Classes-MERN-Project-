import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import {FaUser , FaRegListAlt, FaHome} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";
import { useAuth } from '../../Store/auth';

export default function Adminlayout() {


//   username
// "Mahak"
// email
// "Mahak1911@gmail.co"




  const {user,isLoading} = useAuth();
  console.log(user);

//  if user is not admin then navigate to the home page - can not visit the Admin section 
   if(isLoading){
    return <h1>Loading...</h1>
   }

if(!user.isAdmin){
    return <Navigate to="/" />
  }

  return (
    <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li> <NavLink to="/admin/users"> 
                    <FaUser/>   Users</NavLink> </li>
                    <li> <NavLink to="/admin/Contacts">
                    <FaMessage/>    Contacts</NavLink> </li>
                    <li> <NavLink to="/admin/Services">
                     <FaRegListAlt/>   Services</NavLink> </li>
                    <li> <NavLink to="/">
                     <FaHome/>  Home</NavLink> </li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </>
  )
}
