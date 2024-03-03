import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/auth';

export default function AdminContacts() {

  const [contactData, setcontactData] = useState([]);

  const { authorizationToken } = useAuth();

  const getContactsData = async (req, res) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },

      });
      const data = await response.json();
      console.log(data);
      setcontactData(data);
    } catch (error) {
      console.log("contact", error);
    }
  };

  // delete the user form the table
  const deleteuser= async (id)=>{
    const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
        console.log("CONTACT-DELETE", data);
        if(response.ok){
            getContactsData();
        }
};







  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1 className='main-heading'>Admin Contacts Data</h1>
        </div>
        <div className='container admin-users'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.username}</td>
                    <td>{v.email}</td>
                    <td>{v.message}</td>
                    {/* <td > <Link className='updateLink' to={`/admin/users/${v._id}/edit`}> Edit </Link> </td> */}
                    <td> <button onClick={()=>deleteuser(v._id)} >Delete</button> </td>
                  </tr>
                )
              })}

            </tbody>


          </table>




        </div>
      </section>
    </>
  )
}
