import React, {Component} from 'react';
import firestore from '../firestore';
import firebase from 'firebase';
import 'firebase/auth';
import Home from '../Home/index';
import {Link} from "react-router-dom";
import './estilos/_newuser.sass';

class NewUser extends React.Component{

    state= {
        authenticated: false,
        nombre: '',
        email: '',
        password: '',
        passwordConfirm:'',
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
            .createUserWithEmailAndPassword(this.state.email, this.state.password);
    };

    //const configuracion = {
        //url: 'https://getmate-feb4e.firebaseapp.com/'
    //}

   // result.user.sendEmailVerification(configuracion)

    signInWithGoogle=()=> {
        const provider= new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    
    render(){
    return this.state.authenticated ? (
            <Home /> ) : (
            <div className="Newuser">  
                <div className="NewuserContainer">     
                    <img src={this.state.imgUser} alt="fotoPerfil" className="picLogin"/>
                    <p><h3> Crea tu cuenta</h3></p>
                    <form onSubmit={this.signup}>
                        <div>
                            <input 
                                type="text" 
                                name='nombre'
                                id='nombre'
                                placeholder="Nombre Usuario" 
                                className="NewUserRegister"
                                onChange={this.setValue}
                                value={this.state.nombre}
                                required
                            />
                        </div>    
                        <div>
                            <input 
                                type="email"
                                name='email'
                                placeholder="Correo electrónico" 
                                className="NewUserRegister"
                                onChange={this.setValue}
                                value={this.state.email}
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                name='password'
                                placeholder="Contraseña" 
                                className="NewUserRegister"
                                onChange={this.setValue}
                                value={this.state.password}
                                required
                            /> 
                        </div>
                        <div>
                            <input 
                                type="password" 
                                name='passwordConfirm'
                                placeholder="Confirma tu contraseña"
                                className="NewUserRegister"
                                onChange={this.setValue}
                                value={this.state.passwordConfirm}
                                required
                            />
                        </div>
                        <div><button className='ButtonRegister' > Crear cuenta </button></div>
                   
                    </form> 
                   
                        <button className='SinginGoogle' onClick={this.signInWithGoogle}>
                            <div className= 'GoogleSingin'> <img  src= {this.state.imgGoogle} alt='signInWithGoogle'/></div>
                            <div>Inicia sesión con Google </div>
                        </button>
                    
                </div>

            </div>
    );
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

}

export default NewUser