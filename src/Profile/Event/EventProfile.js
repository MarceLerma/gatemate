import React from 'react';
import EventsBlock from '../../components/EventsBlock';
import EventsBlockMatchs from '../../components/EventsBlockMatchs';
import {Link} from "react-router-dom";
import '../estilos/_event.sass';


class EventProfile extends React.Component{
    render(){
        return(
        <div className='MainEventProfile'>
            <div className='TitleMainEventProfile'>
                <strong className='Title1EventProfile'> Solo para mi </strong> <br/>
                <strong className='Title2EventProfile'> Mis eventos </strong>
            </div>
            <div className='EventProfile'>
                    <EventsBlock eventName='Concierto Marc Anthony'>
                        <Link to='/event'><img src="/Recursos/Marcanthony.png" alt="Marc Anthony" /></Link>
                        <div className="matchEventoPerfilMain" >
                            <EventsBlockMatchs name='Maria'>
                                <img src="/Recursos/maria.png" alt="Maria"/>
                            </EventsBlockMatchs>
                            <EventsBlockMatchs name='David'>
                                <img src="/Recursos/david.png" alt="David" />
                            </EventsBlockMatchs>
                            <EventsBlockMatchs name='Juan'>
                                <img src="/Recursos/juan.png" alt="Juan" />
                            </EventsBlockMatchs>
                        </div>
                    </EventsBlock>
                    <EventsBlock eventName='Webinar "Construyendo el futuro"' >
                        <img src="/Recursos/jovenesConstruyendo.png" alt="Jovenes Construyendo el Futuro" />
                        <div className="matchEventoPerfilMain" >
                            <EventsBlockMatchs name='Karen'>
                                <img src="/Recursos/karen.png" alt="Karen"/>
                            </EventsBlockMatchs>
                        </div>
                    </EventsBlock>
                    <EventsBlock eventName='Limpiando Chapultepec' >
                        <img src="/Recursos/bosqueChapultepec.png" alt="Bosque Chapultepeco" />
                        <div className="matchEventoPerfilMain" >
                            <EventsBlockMatchs name='Laura'>
                                <img src="/Recursos/laura.png" alt="Laura" />
                            </EventsBlockMatchs>
                            
                        </div>
                    </EventsBlock>
                    <EventsBlock eventName='Maraton LALA' >
                        <img src="/Recursos/eventolala.png" alt="Maraton LALA" />
                        <div className="matchEventoPerfilMain" >
                            <EventsBlockMatchs name=''>
                                <img src="" alt="" />
                            </EventsBlockMatchs>
                            
                        </div>
                    </EventsBlock>
               
            </div>
        </div>
        )
    }
}

export default EventProfile
                
