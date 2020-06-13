import React from 'react';
import './estilos/sass/_event.sass';



class EventsBlock extends React.Component{
     state={
          data:[
              
          ]  
        }
    render(){
        return(
          
            <div className='eventoPerfilMain'> 
                 <h3><strong>{this.props.eventName}</strong></h3>
                {this.props.children}
                <p>Mis matchs</p>

            </div>

        )
    }
}

export default EventsBlock
                

                