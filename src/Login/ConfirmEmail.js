import React from 'react';
import {Link} from "react-router-dom";
import './estilos/_confirmemail.sass';
import logo from '../assets/logo2gris.png';

class ConfirmEmail extends React.Component{
    state={
        imgUser: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/user.png?alt=media&token=ce4469ac-a996-4b77-a6d4-e16427f24300',
    }
    render(){
    return (
            <div className="ConfirmEmail">  
                <div className="ConfirmEmailContainer">     
                    <img src={this.state.imgUser} alt="fotoPerfil" className="picLogin"/>
                    <p><h3> ¡Tu cuenta ha sido creada!</h3></p>
                    <div> 
                        <p> Un paso más y estará lista: <br/> <br/>
                        Verifica el correo de confirmación  en la <strong> cuenta de correo que ingresaste y confirma la cuenta </strong><br/> <br/>
                        Si no está en tu bandeja de inicio revisa en la carpeta de Spam  </p> <br/>
                    </div>
                    <div><button className='ButtonConfirmRegister' > Enviar nuevamente correo de confirmación </button></div>
                    <div className='LogoContainer'>
                         <img src={logo} alt="logogetMate" width="35px" height="32px"/> 
                        <Link to="/" className="Logo"> get<strong>Mate</strong></Link>
                    </div>
                </div>

            </div>
    )
}
}
export default ConfirmEmail