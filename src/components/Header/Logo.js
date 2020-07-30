import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo2.png';

import '../estilos/sass/_header.sass';


function Logo (){
    return (
        <div className="bannerHeader">
            <Link to="/" className="Logo"><img src={logo} alt="logogetMate" /></Link> 
            <Link to="/" className="Logo"> get<strong>Mate</strong></Link>
        </div>
    )
}

export default Logo 