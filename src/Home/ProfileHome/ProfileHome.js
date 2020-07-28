import React from 'react';
import Name from './Name';
import Plus from '../Plus';
import EventProfileHome from './EventProfileHome';
import Chat from './Chat';
import firestore from '../../firestore';
import firebase from 'firebase';
import '../estilos/_perfilmain.sass';

class ProfileHome extends React.Component{
    state= {
        name: 'Marcela Lerma',
        fotoPerfil: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil.png?alt=media&token=65c1a095-a8fd-49d6-b591-13e4fcbc525f',
    }
    logout = () => {
    firebase.auth().signOut();
  };
    render(){ 
        return (
            <div className="ProfileHome">
                <Name name={this.state.name}>
                   <img src={this.state.fotoPerfil} alt="fotoPerfil" className='fotoProfileHome'/>
                </Name> 
                <button className='singOut' onClick={this.logout}> Cerrar sesión</button>
                <div className="miseventosPerfilMain">Mis eventos</div>
                <EventProfileHome/>
                <Plus/>
                <Chat/>                
                <Plus/>   
            </div>
    )
}}
   

export default ProfileHome