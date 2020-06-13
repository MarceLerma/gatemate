import React from 'react';
import CategoriesBlock from './CategoriesBlock';
import CategoriesEvent from './CategoriesEvent';
import {Link} from "react-router-dom";
import '../estilos/_contenido.sass';

class Categories extends React.Component{
   render() {
       return (
        <div className="contenidoMain">
            <div className="categoriasContenidoMain">
                <h2><strong className="nombreCategoriasContenidoMain"> Categorias</strong> </h2>
                <CategoriesBlock/>
            </div>
            <div className="tituloContenidoMain">
                <div><h3>Eventos populares</h3></div>
                <div className="subtitulosContenidoMain">
                    <strong> <span className="subtituloContenidoMain">Presenciales</span>  </strong>  
                    Virtuales
                </div>
            </div>
            <div className="boxsContenidoMain">
                    <CategoriesEvent nameEvent= 'Concierto Marc Anthony' dateEvent='Viernes, 28 sep 9:00pm' placeEvent=' Foro Sol'>
                       <Link to= '/event'> <img src="/Recursos/eventosMarcanthony.png" alt="Marc Anthony"/>  </Link>
                    </CategoriesEvent >
                <CategoriesEvent nameEvent= 'The killers en concierto' dateEvent='Sábado, 14 oct  7:00pm' placeEvent=' Palacio de los deportes'>
                    <img src="/Recursos/thekillers.png" alt="The Killers" />
                </CategoriesEvent >
                <CategoriesEvent nameEvent= 'CRYSTAL - Cirque du soleil' dateEvent='Jueves, 26 oct  8:00pm ' placeEvent=' Palacio de los deportes'>
                    <img src="/Recursos/crystal.png" alt="Crystal"/>
                </CategoriesEvent >
                <CategoriesEvent nameEvent= 'CRYSTAL - Cirque du soleil' dateEvent='Viernes, 27 oct  8:00pm ' placeEvent=' Palacio de los deportes'>
                    <img src="/Recursos/crystal.png" alt="Crystal" />
                </CategoriesEvent >
            </div>
        </div>
       )
   } 
}

export default Categories 