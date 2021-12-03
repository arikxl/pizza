import React from 'react';
import { useNavigate } from 'react-router-dom';


const AppHeader = () => {

    const navigate = useNavigate();

    return (
        <header>
            <h1 className="headline"
            onClick={() =>navigate('')}
            >Make Your Pizza</h1>
        </header>
    )
}

export default AppHeader
