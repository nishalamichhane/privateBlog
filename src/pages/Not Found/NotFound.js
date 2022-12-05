import React from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    setTimeout(()=> {
        navigate("/")
    }, 3000)

    return (
        <div>
           <p>This is Not Found Page</p>
        </div>
    );
};

export default NotFound;