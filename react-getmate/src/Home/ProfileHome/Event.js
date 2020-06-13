import React from 'react';
import EventsBlock from '../../components/EventsBlock';
import EventsBlockMatchs from '../../components/EventsBlockMatchs';
import {Link} from "react-router-dom";
//import '../estilos/_perfilmain.sass';


class Event extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <EventsBlock eventName='Concierto Marc Anthony'>
                        <Link to= '/event'><img src="/Recursos/Marcanthony.png" alt="Marc Anthony" /></Link>
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
            </React.Fragment>
        )
    }
}

export default Event
                
