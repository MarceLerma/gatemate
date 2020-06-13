import React from 'react';
import MainEvent from './Event/MainEvent';
import Details from './Details/Details';

import ReviewsBox from './Reviews/ReviewsBox';
import Footer from './Footer/Footer';
import './estilos/_mainevent.sass';
import './estilos/_eventChild.sass';
import './estilos/_reviews.sass';


class Events extends React.Component{
    render(){
       return (
        <div className='MainEventContainer'>
           <MainEvent eventName= "Concierto Marc Anthony" fecha="Viernes, 28 feb 9:00 pm" ubicacion="Palacio de los Deportes" costo="Niveles: E, $490; EE, $790; D, $1,490; C, $2,090; DD, $2,390; B, $2,890; A, $3,490. ">
               <img className='imgEvent' src="/Recursos/2Marcanthony.png" alt="Marc Anthony" />
            </MainEvent>
            <Details acercaEvento='Ponte tus zapatos de baile y prepara tus mejores pasos, porque el “rey de la salsa” estará de regreso en Ciudad de México.
                Marc Anthony, también conocido como “el rey de la salsa”, llegará a México con su más reciente producción OPUS, su primer álbum de estudio después de seis años, y su octavo disco de salsa en casi 30 años de carrera, después de que Otra nota (1993) lo colocó 
                entre los más destacados del mundo de la música latina.'>
                <img className='DetailsImg' src="/Recursos/fotoevento.png" alt="Marc Anthony" />
                <img className='DetailsImg' src="/Recursos/fotoevento3.png" alt="Marc Anthony" />
                <img className='DetailsImg' src="/Recursos/fotoevento2.png" alt="Marc Anthony" />
            </Details>
            <div className='MainReseñas'>
                <div><strong> Reseñas </strong></div>
                <div className='ReseñasBox'>
                    <ReviewsBox name='Yadhira López...' time= ' Hace 2 días'reseña= 'Increible!! El mejor concierto al que he ido!!'>
                        <img src="/Recursos/reseñafoto.png" alt="Yadhira" />
                    </ReviewsBox>
                    <ReviewsBox name= 'Silvia Cervantes...' time= ' Hace 20 días'reseña= 'He visto a Marc Anthony en vivo varias veces pero este sin duda a sido su mejor concierto, se nota su madurez como artista! '>
                        <img src="/Recursos/reseñafoto2.png" alt="Marc Silvia" />
                    </ReviewsBox>
                </div>
            </div>
            <Footer />
        </div>

    ) 
    }
}

export default Events


