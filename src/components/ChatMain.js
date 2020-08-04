import React from 'react';
import './estilos/sass/_chat.sass';


class ChatMain extends React.Component{
    render(){
        return(
          
            <div className='boxchatPerfilMain'> 
                 <h4><strong>{this.props.eventName}</strong></h4>


            </div>

        )
    }
}

export default ChatMain
                

                