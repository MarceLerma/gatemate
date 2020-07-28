import React from 'react';
import '../estilos/_search.sass';


class Cost extends React.Component{
    render() {
        return (
            <div>
                <div className="subtituloSearchMain"> <strong> Costo </strong></div> <br/>
                <input classNamae="rangoSubtituloSearchMain"  type="range" min="0" max="$10,000"/><br/>
             </div>
        )  
    }
}

export default Cost 