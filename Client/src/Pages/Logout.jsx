import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Store/auth';

export default function Logout() {
    const {LogoutUser} = useAuth();

  useEffect(()=>{
    LogoutUser();
  },[LogoutUser]);
  return(
    <div>
        <Navigate to="/login" />;
    </div>
  )
};
