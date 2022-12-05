import React, {useState} from 'react';
import {Link, Navigate, NavLink} from "react-router-dom";


const Login = ( {  auth, setAuth  } ) => {
    function handleLogin(){
        setAuth(true);
        //navigate("/Blogoverzicht");
    }
    return (
        <>
        <div>
            <h1>Testing Login page</h1>
            <button type="button"
                    onClick = { handleLogin } >
                Login
            </button>

        </div>
        </>
    );

};
export default Login;