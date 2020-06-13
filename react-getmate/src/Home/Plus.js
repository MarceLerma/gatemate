import React from 'react';
import {Link} from "react-router-dom";
import './estilos/_perfilmain.sass';

class Plus extends React.Component{
    render(){
        return(
            <div className="vertodosPerfilMain">
                <Link to="/profile">Ver todos</Link>
            </div> 
        )
    }
}

export default Plus