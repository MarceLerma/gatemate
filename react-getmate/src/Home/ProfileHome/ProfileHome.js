import React from 'react';
import Name from './Name';
import Plus from '../Plus';
import Event from './Event';
import Chat from './Chat';
import '../estilos/_perfilmain.sass';

function ProfileHome (){
    return (
            <div className="ProfileHome">
                <Name name='Victoria Martínez'>
                   <img src="/Recursos/fotoperfil.png" alt="fotoPerfil" width="75px" height="75px"/>
                </Name> 
                <div className="miseventosPerfilMain">Mis eventos</div>
                <Event/>
                <Plus/>
                <Chat/>                
                <Plus/>
            </div>
    )
}

export default ProfileHome