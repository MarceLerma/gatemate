import React from 'react';
import {Link} from "react-router-dom";
import '../estilos/_perfilmain.sass';

class Name extends React.Component{
    render(){
        return (
           
            <Link to="/Profile/index" className="tituloPerfilMain">
                    <div>{this.props.children}</div>
                    <div><h2>{this.props.name}</h2> </div>
            </Link>
        )
    }
}

export default Name