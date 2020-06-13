import React from 'react';
import {Link} from "react-router-dom";
import '../estilos/sass/_header.sass';


function Nav (){
    return (
            <nav className="navHeader">
                <Link to=" ">Ayuda</Link>
                <Link to=" ">Blog</Link>
            </nav> 
    )
}

export default Nav 