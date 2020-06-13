import React from 'react';
import '../estilos/_contenido.sass';


class CategoriesEvent extends React.Component{
 
    render(){
        return(
            <div className="eventoBoxsContenidoMain">
                {this.props.children}
                    <div>
                        <h3><strong> {this.props.nameEvent} </strong> </h3>
                        {this.props.dateEvent}  <br/> 
                        {this.props.placeEvent} 
                    </div>
            </div>

        )
    }
}

export default CategoriesEvent

