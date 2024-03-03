import React, { useEffect, useState } from 'react'
import { useAuth } from '../Store/auth.jsx';
import { Link } from 'react-router-dom';
export default function AdminUsers() {

    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth();


    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users",
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });
            const data = await response.json();
            console.log("admin-user", data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };
    // delete the user form the table
    const deleteuser= async (id)=>{
        const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });
                const data = await response.json();
            console.log("USER-DELETE", data);
            if(response.ok){
                getAllUsersData();
            }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);
    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1 className='main-heading'>Admin users Data</h1>
                </div>
                <div className='container admin-users'>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((v, i) => {
                        return (
                            <tr key={i}>
                            <td>{v.username}</td>
                            <td>{v.email}</td>
                            <td>{v.phone}</td>
                            <td > <Link className='updateLink' to={`/admin/users/${v._id}/edit`}> Edit </Link> </td>
                            <td> <button onClick={()=>deleteuser(v._id)}>Delete</button> </td>
                        </tr>
                        )
                    })}
                        
                        </tbody>
                       
                        
                    </table>



                    
                </div>
            </section>

        </>
    )
};
