import React from 'react';
import '../estilos/_hero.sass';


class Hero extends React.Component{
    render(){
        return (
            <div className="profileHero">
                    <div><img src="/Recursos/fotoperfil.png" alt="fotoPerfil" width="75px" height="75px"/></div>
                    <div><strong> Victoria Martínez </strong></div>
            </div> 
        )
    }
}

export default Hero