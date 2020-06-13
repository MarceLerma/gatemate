import React from 'react';
import Modality from './Modality';
import Cost from './Cost';
import Distance from './Distance';
import DayMoment from './DayMoment';
import Day from './Day';
import '../estilos/_search.sass';

function Filters (){
        return (
        <div className="searchMain">
            <p className="tituloSearchMain">Personaliza <br/>  tu búsqueda</p>
            <Modality />
            <Cost />
            <Distance />
            <DayMoment />   
            <Day />      
        </div>           
        )
    }
    
export default Filters