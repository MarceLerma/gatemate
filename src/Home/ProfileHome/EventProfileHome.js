import React from 'react';
import Event from '../../Event/index';
import {Link} from "react-router-dom";
import '../estilos/_perfilmain.sass';


class EventProfileHome extends React.Component{

     state={ 
        listadoEventos: [
            {
                nombre: 'Concierto Marc Anthony',
                slug: 'concierto-marc-anthony',
                imagenHomeProfile: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/Marcanthony.png?alt=media&token=213b5fd5-8199-4833-b1c6-0fa899f5c79a',
                imagenMatch1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/maria.png?alt=media&token=6457e10b-b1fa-436d-8dd5-65bb50064608',
                nombreMatch1: 'Maria',
                imagenMatch2: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/david.png?alt=media&token=bfcc42c1-d536-40bd-a98f-437d2a37feb7',
                nombreMatch2:'David',
                imagenMatch3: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/juan.png?alt=media&token=9532e0d8-9619-4a89-853b-d578e0fdd74c',
                nombreMatch3: 'Juan',

            }, 
            {
                nombre: 'Limpiando Chapultepec',
                slug: 'limpiando-chapultepec',
                imagenHomeProfile: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/bosqueChapultepec.png?alt=media&token=4fef334b-6dbd-4273-9f5e-2e01b4d54003',
                imagenMatch1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/karen.png?alt=media&token=516a81bf-f0c1-41f3-b6b6-dcd228881a81',
                nombreMatch1: 'Karen',
                imagenMatch2: '',
                nombreMatch2:'',
                imagenMatch3: '',
                nombreMatch3: '',
            },
            {
                nombre: 'Webinar "Construyendo el futuro"',
                slug: 'webinar-construyendo-el-futuro',
                imagenHomeProfile: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/jovenesConstruyendo.png?alt=media&token=d86bcbbe-8c10-4173-b1df-daab7f265d41',
                imagenMatch1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/laura.png?alt=media&token=45defeb7-980a-4f2a-8161-538d5164b39f',
                nombreMatch1: 'Laura',
                imagenMatch2: '',
                nombreMatch2:'',
                imagenMatch3: '',
                nombreMatch3: '',
            }
        ]
     }
    render(){
        return( 
                <div>             
                    {this.state.listadoEventos.map((e)=>{
                        return(                
                            <div className='eventoPerfilMain'>
                                <h3><strong>{e.nombre}</strong></h3>
                                <Link to= {`/evento/${e.slug}`}> <img src={e.imagenHomeProfile} alt={e.nombre}/>  </Link>
                                <p>Mis matchs</p>
                                <div className="matchEventoPerfilMain" >
                                    <div>
                                        <Link to= {`/profilematch/${e.nombre}`}>
                                        <img src={e.imagenMatch1}  alt={e.nombreMatch1}/>  
                                        {e.nombreMatch1}
                                         </Link> 
                                        {/* evento/${e.slug}        */}
                                    </div>
                                    <div >
                                        <img src={e.imagenMatch2}  alt={e.nombreMatch2}/>  
                                        {e.nombreMatch2}         
                                    </div>
                                    <div  >
                                        <img src={e.imagenMatch3}  alt={e.nombreMatch3}/>  
                                        {e.nombreMatch3}         
                                    </div>
                                </div>
                            </div>
                                )}
                            )}     
                </div>
             
        )
    }
}

export default EventProfileHome
                
