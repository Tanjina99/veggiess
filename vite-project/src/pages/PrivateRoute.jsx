import React from 'react'
import {Navigate} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem('myToken');
  return token ? (
    element
    ) : (
        <Navigate to="/login"></Navigate>
    )

}

export default PrivateRoute
