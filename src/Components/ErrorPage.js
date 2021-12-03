
import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {


    return (
        <>
        <div className="text-center mt-5">
        <div className="mt-5">
        <p>404</p>
        </div>
        <h2>we are sorry,page not found</h2>
        <p className="mb-5">
        the page you are looking for might have removed had its name changed or is temporrily unavailable
        </p>
        <NavLink to="/">Back to home</NavLink>
        </div>
            
        </>
    )
}

export default ErrorPage;
