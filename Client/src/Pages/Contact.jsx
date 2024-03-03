import React, { useState } from 'react'
import { useAuth } from '../Store/auth';

export default function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // form ki default property hoti toh to reload page reload krni ki usko prevent krne ke liye hum e.prevent.deafult use krte hai
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact({
          // username: "",
          // email: "",
          message: "",

        });
        alert('message send succefully');
      };
    } catch (error) {
      console.log("contact error", error)
    }
  };


  return (
    <>
      <div className="section-contact">
        <div className="contact-content container">
          <h1 className='main-heading'>Contact From</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="contactimage" title='image' width="500" height="400" />
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handleInput}
                  placeholder="email"
                  id='email'
                  required
                  autoComplete='off'
                />
              </div>
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  type="message"
                  name="message"
                  value={contact.message}
                  onChange={handleInput}
                  placeholder="message"
                  id='message'
                  autoComplete='off'
                  col="30"
                  rows="6"
                ></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-submit">
                Submit
              </button>


            </form>
          </div>
        </div>
      </div>
      <div className='container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.32835516077!2d77.2089851!3d28.527352200000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707201649427!5m2!1sen!2sin" width="1200" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
