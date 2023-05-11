import React from 'react';
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({children}) {
    const isLoggedIn = localStorage.getItem("access_token");
    return isLoggedIn ? children : <Navigate to='/login'></Navigate>
}
