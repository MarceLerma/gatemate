import React from 'react';
import ChatMain from '../../components/ChatMain';
import ChatBox from '../../components/ChatBox';
import '../estilos/_perfilmain.sass';

class Chat extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="chatPerfilMain"><h2>Chat</h2></div>
                <ChatMain eventName='Concierto Marc Anthony'>
                    <ChatBox className='subboxChatPerfilMain' name='Maria' chat='Si!! Dile a María'>
                        <img src="/Recursos/maria.png" alt="Maria"/>
                    </ChatBox>
                    <ChatBox className='subboxChatPerfilMain' name='David' chat='Super!!, Estará genial'>
                        <img src="/Recursos/david.png" alt="David"/>
                    </ChatBox>
                </ChatMain>
                <ChatMain  className='subboxChatPerfilMain' eventName='Limpiando Chapultepec'>
                    <ChatBox  name='Laura' chat="Yo llevo las bolsas!">
                        <img src="/Recursos/laura.png" alt="Laura"/>
                    </ChatBox> 
                </ChatMain>
            </React.Fragment>
        )
    }
}

export default Chat