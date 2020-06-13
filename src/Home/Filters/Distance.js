import React from 'react';
import '../estilos/_search.sass';

class Distance extends React.Component{
    render(){
        return (
            <div>
                <div className="subtituloSearchMain"> Distancia </div> <br/>
                <input type="range" min="0" max="$10,000" className="rangoSubtituloSearchMain"/><br/>
            </div>
        )
    }
}

export default Distance