import React from 'react';
import './estilos/sass/_event.sass';


class EventsBlockMatchs extends React.Component{
    
        
    render(){
        return(
            
            <div>
                {this.props.children}  
                {this.props.name}    
            </div>

        )
    }
}

export default EventsBlockMatchs
                