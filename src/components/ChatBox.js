import React from 'react';
import './estilos/sass/_chat.sass';

class ChatBox extends React.Component{
    render(){
        return(   
             <div className='subboxChatPerfilMain'>
                {this.props.children} 
                <div>
                    <strong>{this.props.name}</strong> <br/>
                    {this.props.chat}
                </div>
            </div>

        )
    }
}

export default ChatBox
                

                