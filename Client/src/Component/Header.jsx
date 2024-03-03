import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../Store/auth'

export default function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <h2>TechnicalClasses</h2>
          </div>
          <nav>
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/service"}>Service</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
              {
                isLoggedIn ? (
                  <li><NavLink to={"/logout"}>Logout</NavLink></li>
                ) :
                  (
                    <>
                      <li><NavLink to={"/register"}>Sign Up</NavLink></li>
                      <li><NavLink to={"/login"}>Login</NavLink></li>
                    </>
                  )
              }


            </ul>
          </nav>
        </div>
      </header>

    </>
  )
}
