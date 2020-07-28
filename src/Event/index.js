import React from 'react';
import {Link} from "react-router-dom";
import Evento from '../Home/index';
import Footer from './Footer/Footer';
import './estilos/_mainevent.sass';
import './estilos/_description.sass';
import './estilos/_eventChild.sass';
import './estilos/_reviews.sass';


class Events extends React.Component{
    state={
        imgCalendario:'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/calendario.png?alt=media&token=b25d8a09-236c-43e0-a20c-2671844e9ebd',
        imgUbicacion: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/ubicacion.png?alt=media&token=ab3e15c9-0031-412c-9c0d-eef488766c6f',
        imgCosto: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/costo.png?alt=media&token=fd1c93ea-0890-42b9-a65b-569c7b607bf4',
        
        resenaEvento: [
            {
                nombre: 'Concierto Marc Anthony',
                slug: 'concierto-marc-anthony',
                fecha: '28 feb ',
                dia: 'Viernes, ',
                hora: '9:00 pm',
                ubicacion: 'Palacio de los Deportes',
                costo: 'Niveles: E, $490; EE, $790; D, $1,490; C, $2,090; DD, $2,390; B, $2,890; A, $3,490. ',
                imagen: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/2Marcanthony.png?alt=media&token=6fd1f829-744f-4010-a6c6-81c4a3fafced',
                detalles: 'Ponte tus zapatos de baile y prepara tus mejores pasos, porque el “rey de la salsa” estará de regreso en Ciudad de México. Marc Anthony, también conocido como “el rey de la salsa”, llegará a México con su más reciente producción OPUS, su primer álbum de estudio después de seis años, y su octavo disco de salsa en casi 30 años de carrera, después de que Otra nota (1993) lo colocó entre los más destacados del mundo de la música latina.',
                imagen1Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoevento.png?alt=media&token=3ce50085-b373-4eea-8837-79e04675a046',
                imagen2Detalles: 'https://www.youtube.com/embed/s8oc4Abu8Ws',
                imagen3Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoevento2.png?alt=media&token=3e9f98ae-c9d6-40cf-acb6-35bf43c72e39',
                nombre1resena: 'Yadhira López   ',
                tiempo1resena: 'Hace 2 días',
                resena1: 'Increible!! El mejor concierto al que he ido!! ❤️',
                imagen1resena1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/rese%C3%B1afoto.png?alt=media&token=4e5fcf35-32ab-4bb2-8ba9-eec6ad576433',
                nombre2resena: 'Silvia Cervantes   ',
                tiempo2resena: 'Hace 20 días',
                resena2: 'He visto a Marc Anthony en vivo varias veces pero este sin duda a sido su mejor concierto, se nota su madurez como artista!',
                imagen2resena2: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/rese%C3%B1afoto2.png?alt=media&token=2863621e-e80c-4db7-8017-5c9ce08960e1',

            },

             {
                nombre: 'The Killers en concierto',
                slug: 'the-killers-en-concierto',
                dia: 'Sábado, ',
                fecha: '14 oct ',
                hora: '7:00 pm',
                ubicacion: 'Palacio de los Deportes',
                costo: 'Niveles: E, $600; EE, $1090; D, $1,790; C, $2,290; DD, $2,890; B, $3,500; A, $3,990. ',
                imagen: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/eventothekillers.png?alt=media&token=b7f12c07-0d90-4683-9af0-2d2e28d2ab9b',
                detalles: 'The Killers, quienes acaban de decirle al mundo que han preparado un nuevo album llamado "Imploding The Mirage"... ¡y también han anunciado nuevos conciertos! Fans de The Killers en México, pueden alegrarse, porque ofrecerán fechas en el país.',
                imagen1Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle2thekillers.png?alt=media&token=84c65f9a-76b4-42bd-af45-a4f7a615529b',
                imagen2Detalles: 'https://www.youtube.com/embed/PRltzfJyqak',
                imagen3Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle1thekillers.png?alt=media&token=76b21f88-cb13-41be-9861-2041e70de9c3',
                nombre1resena: 'Enrique González  ',
                tiempo1resena: 'Hace 5 días',
                resena1: 'Su nuevo concierto es simplemente sensacional! ',
                imagen1resena1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/enrique.png?alt=media&token=afc98eff-fc6a-40f0-bcb1-998b70574102',
                nombre2resena: 'Marcela Lerma   ',
                tiempo2resena: 'Hace 10 días',
                resena2: 'Cada concierto es único, he ido a tres y todos los han sido diferentes',
                imagen2resena2: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/marcela.png?alt=media&token=d41d28c2-fb22-42b5-82cd-e091496df0a6',

            },
            {
                nombre: 'CRYSTAL - Cirque du soleil',
                slug: 'crystal-cirque-du-soleil',
                dia: 'Jueves, ',
                fecha: '26 oct ',
                hora: '8:00 pm',
                ubicacion: 'Palacio de los Deportes',
                costo: 'Niveles: E, $800; EE, $1000; D, $1,590; C, $2,000; DD, $2,500; B, $3,000; A, $3,990. ',
                imagen: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/imagencrystal.png?alt=media&token=b46c8280-4cb3-4881-87ee-eab2cd1a5cde',
                detalles: 'Cirque du Soleil se enorgullece de presentar en México su espectáculo más impresionante hasta el momento, Crystal. Un espectáculo sobre hielo único en su género que combina las artes circenses y el mundo del patinaje en una nueva y sorprendente producción',
                imagen1Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle1crystal.png?alt=media&token=f504e0b7-8274-4bbb-b0f6-3d3f0477c6e0',
                imagen2Detalles: 'https://www.youtube.com/embed/Ig2gKhoGbDk',
                imagen3Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle3crystal.png?alt=media&token=29fe2cd8-447c-4b22-ad1e-533675c199b8',
                nombre1resena: 'Alejandra Corral  ',
                tiempo1resena: 'Hace 1 día',
                resena1: 'El espectáculo es fuera de este mundo',
                imagen1resena1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/alejandraCorral.png?alt=media&token=1c506962-8c25-45aa-8a5c-6571e34a27b8',
                nombre2resena: 'Margarita Tovon   ',
                tiempo2resena: 'Hace 3 días',
                resena2: 'No creo que sea el mejor show del Cirque du Soleil, pero sin duda es bueno',
                imagen2resena2: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/margaritaTovon.png?alt=media&token=1b581c05-60b1-4152-99d9-a542a45904e3',

            },
             {
                nombre: 'Webinar "Construyendo el futuro"',
                slug: 'webinar-construyendo-el-futuro',
                fecha: '28 oct ',
                dia: 'Miércoles, ',
                hora: '10:00 am',
                ubicacion: 'Auditorio Nacional',
                costo: '$200',
                imagen: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/eventoWebinar.png?alt=media&token=63d2e152-ffdf-4ea3-b949-c6c252b315e8',
                detalles: 'Un programa que vincula a personas de entre 18 y 29 años de edad, que no estudian y no trabajan, con empresas, talleres, instituciones o negocios donde desarrollan o fortalecen hábitos laborales y competencias técnicas para incrementar sus posibilidades de empleabilidad a futuro.',
                imagen1Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle1Webinar.png?alt=media&token=fc419628-dba8-4f61-9dbd-fea419d9febc',
                imagen2Detalles: 'https://www.youtube.com/embed/I2rpm4t0HcQ',
                imagen3Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle2webinar.png?alt=media&token=3a6ccb55-4cf0-4d3d-ac4f-00e6ff810f9b',
                nombre1resena: 'Graciela Rios  ',
                tiempo1resena: 'Hace 2 días',
                resena1: 'La conferencia me ayudo mucho para entender como funciona el proyecto',
                imagen1resena1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/graciela.png?alt=media&token=03b913ee-62d6-465e-9d03-621cbe5e2924',
                nombre2resena: 'Marcela Lerma   ',
                tiempo2resena: 'Hace 5 días',
                resena2: 'Fue una buena conferencia',
                imagen2resena2: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/marcela.png?alt=media&token=d41d28c2-fb22-42b5-82cd-e091496df0a6',

            },
            {
                nombre: 'Limpiando Chapultepec ',
                slug: 'limpiando-chapultepec',
                fecha: '14 nov ',
                dia: 'Sábado, ',
                hora: '02:00 pm',
                ubicacion: 'Bosque de Chapultepec',
                costo: ' $0.0 ',
                imagen: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/eventoChapultepec.png?alt=media&token=f778dc9f-97fd-4e96-9220-9b802d9988e9',
                detalles: 'Acompáñanos a limpiar uno de los principales pulmones de la ciudad y seguir contribuyendo para tener un mejor espacio para todos, te esperamos con tu familia y amigos, recuerda que entre más mejor!',
                imagen1Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle1Chapultepec.png?alt=media&token=9697f345-e6d8-46fc-aa0b-4b391e90164a',
                imagen2Detalles: 'https://www.youtube.com/embed/lD8vLlJyYJ4',
                imagen3Detalles: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/detalle2Chapultepec.png?alt=media&token=abb34f44-65ca-4109-ae2a-c8b9b79585bb',
                nombre1resena: 'Graciela Rios  ',
                tiempo1resena: 'Hace 2 días',
                resena1: 'Con un granito que aporte cada uno se puede hacer una gran montaña',
                imagen1resena1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/graciela.png?alt=media&token=03b913ee-62d6-465e-9d03-621cbe5e2924',
                nombre2resena: 'Silvia Cervantes   ',
                tiempo2resena: 'Hace 3 días',
                resena2: 'Es importante que cuidemos uno de nuestros principales pulmones de la ciudad',
                imagen2resena2: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/rese%C3%B1afoto2.png?alt=media&token=2863621e-e80c-4db7-8017-5c9ce08960e1'
            }

        ]
    }
    render(){

    
         const filtro=  this.state.resenaEvento.filter( (e) => 
                
                { return e.slug === this.props.match.params.nombre
            
                })

         console.log(filtro)


       return ( 
       
        <div className='MainEventContainer'>
            
            {filtro.map((e)=> {
                return (
            <>   
                <div className='eventChild'> 
                    <div className='PictureEvent'>
                        <img className='imgEvent'src={e.imagen} alt={e.nombre}/> <br/>
                        <button className='botonEvent'> < Link to= "/Profile"> Quiero ir </Link></button>
                     </div>
                    <div>
                        <strong> <h1> {e.nombre} </h1></strong>
                        <div className= 'detailEvent'>
                            <img className='ImgEvent' src={this.state.imgCalendario} alt="Calendadrio" /> 
                            {e.fecha} {e.hora}
                        </div>
                        <div className= 'detailEvent'>
                            <img className='UbicacionImgEvent' src={this.state.imgUbicacion} alt="Ubicación" /> 
                            {e.ubicacion}
                        </div>
                        <div className= 'detailEvent'>
                            <img className='ImgEvent' src={this.state.imgCosto} alt="Costo" /> 
                            {e.costo}
                        </div>
                    </div>
                </div>

                    <div className='Details'>
                        <div>
                            <strong> Acerca de este evento </strong>
                            <div className='DescriptionEvent'> {e.detalles} </div>
                        </div>
                        <div className='PictureEvent'>
                           <img className='DetailsImg' src={e.imagen1Detalles} alt={e.nombreEvento}/> 
                            <iframe src={e.imagen2Detalles} alt={e.nombreEvento} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                            <img className='DetailsImg' src={e.imagen3Detalles} alt={e.nombreEvento}/>
                        </div>
                    </div>

                <div className='MainReviews'>
                    <div><strong> Reseñas </strong></div>
                    <div className='ReviewMainBox'>
                        <div className='ReviewsBox'>
                            <div><img src={e.imagen1resena1} alt={e.nombreEvento}/></div>
                            <div>    
                                <strong>{e.nombre1resena}</strong> {e.tiempo1resena}<br/>
                                {e.resena1}
                            </div>
                        </div> 
                        <div className='ReviewsBox'>
                            <div><img src={e.imagen2resena2} alt={e.nombreEvento}/></div>
                            <div>    
                                <strong>{e.nombre2resena}</strong> {e.tiempo2resena}<br/>
                                {e.resena2}
                            </div>
                        </div>
                    </div>
                   
                </div>
            </>
                )
            })}
   
            <Footer />
        </div>

    ) 
    }
}


export default Events


