// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { token } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? <Component {...props} /> : <Navigate to="/login" />
            }
        />
    );
};

export default ProtectedRoute;