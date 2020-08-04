import React from 'react';
import {Link} from "react-router-dom";
import firestore from '../firestore';
import firebase from 'firebase';
import Profile from '../Profile/index';
import './estilos/_login.sass';

class Login extends React.Component {

state= {
        authenticated: false,
        email: '',
        password: '',
        imgUser: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/user.png?alt=media&token=ce4469ac-a996-4b77-a6d4-e16427f24300',
        imgGoogle: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/google.png?alt=media&token=7c44459b-3ca1-488d-89aa-58a0e82a9159',
}

    setValue= e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
        }

    signup= e => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password);
    };
    signInWithGoogle=()=> {
            const provider= new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        }

componentDidMount(){
            console.log ('firebase', firebase)
            firebase.auth().onAuthStateChanged(user => {
                console.log('user', user)
                if (user){
                    this.setState({
                        authenticated: true,
                    });
                } else { 
                    this.setState({
                        authenticated: false,
                    });
                }
            });
        }
        
render(){
    return (
            <div className="Login">  
                <div className="LoginContainerMessage"> ¡No te pierdas ese evento!... <br/><strong> Aquí </strong>encontrarás con quien ir </div>
                <div className="LoginContainer">     
                    <img src={this.state.imgUser} alt="fotoPerfil" className="picLogin"/>
                    <p><h3> Inicia sesión </h3></p>
                    <div className="LoginStart">¿Aún sin cuenta? 
                        <Link to="/newuser" className="">  Regístrarme </Link>
                    </div>
                    <div className='SubLogingContainer'> 
                        <form onSubmit={this.signup}> 
                            <div>
                                <p><strong className="EmailLogin">Correo electrónico </strong></p>
                                <input 
                                    type="email"
                                    name='email'
                                    placeholder="Correo electrónico" 
                                    className="loging"
                                    onChange={this.setValue}
                                    value={this.state.email}
                                    required
                                />
                            </div>
                            <div>
                                <p><strong className="EmailLogin">Password </strong></p>
                                <input 
                                    type="password" 
                                    name='password'
                                    placeholder="Contraseña" 
                                    className="loging"
                                    onChange={this.setValue}
                                    value={this.state.password}
                                    required
                                /> 
                            </div>
                            <button className='ButtonLogin' > Ingresar </button>  
                        </form> 
                    </div>
                    <div className="ForgotLogin"> <Link to="/changepassword" >  ¿Olvidaste tu contraseña? </Link></div>
                     <button className='SinginGoogle' onClick={this.signInWithGoogle}>
                            <div className= 'GoogleSingin'> <img  src= {this.state.imgGoogle} alt='signInWithGoogle'/></div>
                            <div>Inicia sesión con Google </div>
                    </button>
                </div>

            </div>
    )
    } 
}

    

export default Login