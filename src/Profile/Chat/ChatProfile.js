import React from 'react';
import ChatMain from '../../components/ChatMain';
import ChatBox from '../../components/ChatBox';
import '../estilos/_chat.sass';


class ChatProfile extends React.Component{
    render(){
        return(
            <div className='MainChatProfile'>
                <div className="TitleChatProfile"> <strong>Mis Chats </strong></div>
                <div className='ChatProfile'>
                    <ChatMain eventName='Concierto Marc Anthony'>
                        <ChatBox className='subboxChatPerfilMain' name='Maria' chat='Si!! Dile a María'>
                            <img src="/Recursos/maria.png" alt="Maria"/>
                        </ChatBox>
                        <ChatBox className='subboxChatPerfilMain' name='David' chat='Super!!, Estará genial'>
                            <img src="/Recursos/david.png" alt="David"/>
                        </ChatBox>
                    </ChatMain>
                    <ChatMain  eventName='Limpiando Chapultepec'>
                        <ChatBox className='subboxChatPerfilMain'  name='Laura' chat="Yo llevo las bolsas!">
                            <img src="/Recursos/laura.png" alt="Laura"/>
                        </ChatBox> 
                    </ChatMain>
                    <ChatMain  eventName='Webinar "Construyendo el futuro"'>
                        <ChatBox className='subboxChatPerfilMain' name='Karen' chat="Pero entonces no tenemos que preparar nada??">
                            <img src="/Recursos/karen.png" alt="Karen"/>
                        </ChatBox> 
                    </ChatMain>
                </div>
            </div>
        )
    }
}

export default ChatProfile
                
