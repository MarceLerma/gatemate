import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo2.png';

import '../estilos/sass/_header.sass';


function Logo (){
    return (
        <div className="bannerHeader">
        <img src={logo} alt="logogetMate" width="35px" height="32px"/> 
            <Link to="/" className="Logo"> get<strong>Mate</strong></Link>
        </div>
    )
}

export default Logo 