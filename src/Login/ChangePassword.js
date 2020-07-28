import React from 'react';
import {Link} from "react-router-dom";
import './estilos/_changepassword.sass';

class ChangePassword extends React.Component{
    state={
        imgUser: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/user.png?alt=media&token=ce4469ac-a996-4b77-a6d4-e16427f24300',
    }
    render(){
    return (
            <div className="Newuser">  
                <div className="ChangePasswordContainer">     
                    <img src={this.state.imgUser} alt="fotoPerfil" className="picLogin"/>
                    <p><h3> Cambia tu contraseña</h3></p>
                    <div><input type="text" placeholder="Nueva contraseña" className="ChangePasswordRegister"/> </div>
                    <div><input type="text" placeholder="Confirma tu contraseña" className="ChangePasswordRegister"/> </div>
                    <div><button className='ButtonChangePasswordRegister' > Cambiar contraseña </button></div>
                </div>

            </div>
        )
    }
}

export default ChangePassword