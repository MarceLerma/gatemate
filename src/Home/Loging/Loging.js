import React from 'react';
import Name from './Name';
import '../estilos/_perfilmain.sass';

function ProfileHome (){
    return (
            <div className="ProfileHome">
                <Name name='Inicia Sesión'>
                   <img src="/Recursos/fotoperfil.png" alt="fotoPerfil" width="75px" height="75px"/>
                </Name> 
                <div className="miseventosPerfilMain">Mis eventos</div>

            </div>
    )
}

export default ProfileHome