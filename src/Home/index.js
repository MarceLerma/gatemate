import React from 'react';
//import Filters from './Filters/Filters';
import ProfileHome from './ProfileHome/ProfileHome';
import Login from '../Login/Login';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Categories from './Filters/Categories';
import DayMoment from './Filters/DayMoment';
import firebase from 'firebase';
import 'firebase/auth';
import Day from './Filters/Day';
import './_body.sass';
import './estilos/_contenido.sass';

class Home extends React.Component{
    state={
        authenticated: false,
        nombre: '',
        email: '',
        password: '',
        passwordConfirm:'',
        titulo: 'Eventos Populares',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/eventospopulares.PNG?alt=media&token=8ff38777-8557-4845-a6aa-ddeb86329aa9',
        listadoEventos: [
            {
                nombre: 'Concierto Marc Anthony',
                slug: 'concierto-marc-anthony',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/eventosMarcanthony.png?alt=media&token=31bd4fdf-c0d6-48e8-a9be-dd75aebdb676',
                fecha: '28 sep ',
                dia: 'Viernes, ',
                hora: '9:00 pm',
                momentodia: 'noche',
                ubicacion: 'Palacio de los Deportes',
                categoria:'Conciertos',
                modalidad: 'presencial',
                costo: 1000,

            }, 
            {
                nombre: 'The Killers en concierto',
                slug: 'the-killers-en-concierto',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/thekillers.png?alt=media&token=dbe7371e-e10f-4678-951b-af30e3fab5bc',
                fecha: '14 oct ',
                dia: 'Sábado, ',
                hora: '7:00 pm',
                momentodia: 'noche',
                ubicacion: 'Palacio de los Deportes',
                categoria:'Conciertos',
                modalidad: 'presencial',
                costo: 1500,
            },
            {
                nombre: 'CRYSTAL - Cirque du soleil',
                slug: 'crystal-cirque-du-soleil',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/crystal.png?alt=media&token=ed3aa2bd-1d54-4b0f-aa2d-d44d44779c3e',
                fecha: '26 oct ',
                dia: 'Jueves',
                hora: '8:00 pm',
                momentodia: 'noche',
                ubicacion: 'Palacio de los Deportes',
                categoria:'Culturales',
                modalidad: 'presencial',
                costo: 1200,
            },
            {
                nombre: 'Webinar "Construyendo el futuro" ',
                slug: 'webinar-construyendo-el-futuro',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/jovenesfuturo.png?alt=media&token=d8549b05-6eb4-46ee-b7a3-ba5d80785c1b',
                fecha: '28 oct ',
                dia: 'Miércoles, ',
                hora: '10:00 am',
                momentodia: 'mañana',
                ubicacion: 'Auditorio Nacional',
                categoria:'Profesionales',
                modalidad: 'presencial',
                costo: 200,
            },
            {
                nombre: 'Limpiando Chapultepec ',
                slug: 'limpiando-chapultepec',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/bosque.png?alt=media&token=d5eb7adc-8a95-4945-a0c5-3fc54914dca4',
                fecha: '14 nov ',
                dia: 'Sábado, ',
                hora: '02:00 pm',
                momentodia: 'tarde',
                ubicacion: 'Bosque de Chapultepec',
                categoria:'Alternativos',
                modalidad: 'presencial',
                costo: 0,
            }
        ], 
        listadoEventosFiltrados: [
            {
                nombre: 'Concierto Marc Anthony',
                slug: 'concierto-marc-anthony',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/eventosMarcanthony.png?alt=media&token=31bd4fdf-c0d6-48e8-a9be-dd75aebdb676',
                fecha: '28 sep ',
                dia: 'Viernes, ',
                hora: '9:00 pm',
                momentodia: 'noche',
                ubicacion: 'Palacio de los Deportes',
                categoria:'Conciertos',
                modalidad: 'presencial',
                costo: 1000,

            }, 
            {
                nombre: 'The Killers en concierto',
                slug: 'the-killers-en-concierto',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/thekillers.png?alt=media&token=dbe7371e-e10f-4678-951b-af30e3fab5bc',
                fecha: '14 oct ',
                dia: 'Sábado, ',
                hora: '7:00 pm',
                momentodia: 'noche',
                ubicacion: 'Palacio de los Deportes',
                categoria:'Conciertos',
                modalidad: 'presencial',
                costo: 1500,
            },
            {
                nombre: 'CRYSTAL - Cirque du soleil',
                slug: 'crystal-cirque-du-soleil',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/crystal.png?alt=media&token=ed3aa2bd-1d54-4b0f-aa2d-d44d44779c3e',
                fecha: '26 oct ',
                dia: 'Jueves',
                hora: '8:00 pm',
                momentodia: 'noche',
                ubicacion: 'Palacio de los Deportes',
                categoria:'Culturales',
                modalidad: 'presencial',
                costo: 1200,
            },
            {
                nombre: 'Webinar "Construyendo el futuro" ',
                slug: 'webinar-construyendo-el-futuro',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/jovenesfuturo.png?alt=media&token=d8549b05-6eb4-46ee-b7a3-ba5d80785c1b',
                fecha: '28 oct ',
                dia: 'Miércoles, ',
                hora: '10:00 am',
                momentodia: 'mañana',
                ubicacion: 'Auditorio Nacional',
                categoria:'Profesionales',
                modalidad: 'presencial',
                costo: 200,
            },
            {
                nombre: 'Limpiando Chapultepec ',
                slug: 'limpiando-chapultepec',
                imagenHome: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/bosque.png?alt=media&token=d5eb7adc-8a95-4945-a0c5-3fc54914dca4',
                fecha: '14 nov ',
                dia: 'Sábado, ',
                hora: '02:00 pm',
                momentodia: 'tarde',
                ubicacion: 'Bosque de Chapultepec',
                categoria:'Alternativos',
                modalidad: 'presencial',
                costo: 0,
            }
        ],
        filtros: [
            {
               alternativos: false, 
                conciertos: false,
                culturales: false,
                deportes: false, 
                profesionales: false,
                vidaNocturna: false,
                todos: true,
            },
            {
                mañana: false, 
                tarde: false,
                noche: false,
            },
            {
                lunes: false,
                martes: false,
                miercoles: false,
                jueves: false,
                viernes: false,
                sabado: false,
                domingo: false,
            },
        ],
        
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

        handleCategories = (selection, checked) => {
            let nuevosfiltros = [...this.state.filtros]

            nuevosfiltros[0] = {
                ...nuevosfiltros[0],
                alternativos: false, 
                conciertos: false,
                culturales: false,
                deportes: false, 
                profesionales: false,
                vidaNocturna: false,
                todos: false,
                [selection]: checked, 
            }

           


            let eventosfiltrados = this.state.listadoEventos.filter( e => {
                let categoria = e.categoria.toLowerCase()
                return categoria === selection
            })

            this.setState({
                filtros: nuevosfiltros,
                listadoEventosFiltrados: eventosfiltrados
            })
        }

        handleDayMoment = (selection, checked) => {
            
            let momentodiafiltros= [...this.state.filtros]
            console.log('momentodiafiltrosantes:', momentodiafiltros)
            momentodiafiltros[1]={
                ...momentodiafiltros[1],
                [selection]: checked,
                }
            console.log('momentodiafiltrosdespues:', momentodiafiltros)

             // 1. Necesitamos hacer una copia de los filtros de dia, tarde, noche
            // 2. Seleccionar el arreglo y cambiar con [selection]: checked los momentos del día
            // 3. Filtrar todos los elementos que tengan true. Aquí se tiene que hacer un loop con Object.assign
            // 4. Todo en el mismo filter, o hacemos dos filters.
        }
           
        
        

        handleDay = (selection, checked) => {
            this.setState({
            [selection]: checked,   
            })
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

               if(this.state.filtros[0].alternativos===true)
                {this.state.listadoEventos.filter( (e) => 
                { return e.categoria === this.state.listadoEventos.alternativos
                })} 
                else if (this.state.filtros[0].conciertos===true)
                {this.state.listadoEventos.filter( (e) => 
                { return e.categoria === this.state.listadoEventos.conciertos
                })}
                else if (this.state.filtros[0].culturales===true)
                {this.state.listadoEventos.filter( (e) => 
                { return e.categoria === this.state.listadoEventos.culturales
                })}  
           }
                
        

    render(){
        console.log (this.state)
        let titulo;
            if (this.state.filtros[0].alternativos===true){
                titulo= 'Alternativos';
            } else if (this.state.filtros[0].conciertos===true){
                titulo='Conciertos';
            } else if (this.state.filtros[0].culturales===true){
                titulo='Culturales';
            } else if (this.state.filtros[0].deportes===true){
                titulo='Deportes';
            } else if (this.state.filtros[0].profesionales===true){
                titulo='Profesionales';
            } else if (this.state.filtros[0].vidaNocturna===true){
                titulo='Vida Nocturna';
            } else if (this.state.filtros[0].todos===true){
                titulo='Todos';
            }

        let imagen;
            if(this.state.filtros[0].alternativos===true){
                imagen='https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/alternativos.png?alt=media&token=9319dd6c-0ea9-43a9-ba27-39df15c3654b';
            } else if (this.state.filtros[0].conciertos===true){
                imagen='https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/conciertos.png?alt=media&token=f3812de6-9a71-4b79-ad1a-1b5ff2500418';
            }else if (this.state.filtros[0].culturales===true){
                imagen='https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/culturales.png?alt=media&token=f7ec70d3-fee5-4ee2-bae6-ab5382471208';
            }else if (this.state.filtros[0].deportes===true){
                imagen='https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/deportes.png?alt=media&token=ccf46f78-c6c4-4bf6-b07a-d9c3b32cc0d7';
            }else if (this.state.filtros[0].profesionales===true){
                imagen='https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/profesionales.png?alt=media&token=258ffb5e-aa0d-43e4-918f-423b535bf603';
            }else if (this.state.filtros[0].vidaNocturna===true){
                imagen='https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/vidanocturna.png?alt=media&token=57021468-3455-44a0-bfd7-2d0599e8465a';
            }else if (this.state.filtros[0].todos===true){
                imagen='https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/eventospopulares.PNG?alt=media&token=8ff38777-8557-4845-a6aa-ddeb86329aa9';
            }
            
              
        console.log(this.state.filtros[0].todos)
        return (
            <div className='Body'> 
                {this.state.authenticated ? (<ProfileHome/> ): <Login /> }     
                <div className="contenidoMain">
                    <div className="tituloContenidoMain">
                        <div className='MainTituloContenidoMain'><img  src={imagen ? imagen : this.state.imagen}  alt={titulo ? titulo : this.state.titulo} /><strong>{titulo ? titulo : this.state.titulo} </strong></div> 
                    </div>
                    <div className="boxsContenidoMain">
                        {
                        this.state.filtros[0].todos === true ? 
                        this.state.listadoEventos.map((e)=>{
                            return(     
                                 <div className="eventoBoxsContenidoMain">
                                    <div><Link to= {`/evento/${e.slug}`}> <img src={e.imagenHome} alt={e.nombre}/>  </Link></div>
                                    <div >
                                        <h2><strong> {e.nombre} </strong> </h2>
                                        <h4>{e.dia} {e.fecha}{e.hora}  <br/> 
                                        {e.ubicacion}  </h4>
                                    </div>
                                </div>
                                )}
                            )
                            :
                            this.state.listadoEventosFiltrados.map((e)=>{
                                return( 
                                            
                                     <div className="eventoBoxsContenidoMain">
                                        <div><Link to= {`/evento/${e.slug}`}> <img src={e.imagenHome} alt={e.nombre}/>  </Link></div>
                                        <div >
                                            <h2><strong> {e.nombre} </strong> </h2>
                                            <h4>{e.dia} {e.fecha}{e.hora}  <br/> 
                                            {e.ubicacion}  </h4>
                                        </div>
                                    </div>
                                    )}
                                )
                        }
                        

                            
                    </div>
                </div>  
                <div className="searchMain">
                    <p className="tituloSearchMain">Personaliza <br/>  tu búsqueda</p>
                    <Categories categoriesHandler={this.handleCategories} />
                    <DayMoment dayMomentHandler={this.handleDayMoment}/>   
                    <Day dayHandler={this.handleDay}/>      
                </div>     
        </div>
    ) 
    }

}
export default Home 