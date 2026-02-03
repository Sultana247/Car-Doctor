import React, { useContext } from 'react';
import AuthContext from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const Private = ({children}) => {
    const location =useLocation();
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={`/login`} state={{location: location.pathname}}></Navigate>
    );
};

export default Private;