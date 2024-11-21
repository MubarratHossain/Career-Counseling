import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';  
import { authContext } from '../Authprovider/Authprovider';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(authContext);

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span> ; 
    }

    if (!user) {
        return <Navigate to="/login" replace />;  
    }

    return children;
};

export default PrivateRoute;
