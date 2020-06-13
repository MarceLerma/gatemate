import React from 'react';
import '../estilos/_search.sass';


class Cost extends React.Component{
    render() {
        return (
            <div>
                <div className="subtituloSearchMain"> Costo </div> <br/>
                <input  type="range" min="0" max="$10,000" classNamae="rangoSubtituloSearchMain" /><br/>
             </div>
        )  
    }
}

export default Cost 