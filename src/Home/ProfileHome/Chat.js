import React from 'react';
import {Link} from "react-router-dom";
//import ChatMain from '../../components/ChatMain';
//import ChatBox from '../../components/ChatBox';
import '../estilos/_perfilmain.sass';

class Chat extends React.Component{
 state={ 
        listadoChats: [
            {
                nombre: 'Concierto Marc Anthony',
                slug: 'concierto-marc-anthony',
                imagenMatch1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/maria.png?alt=media&token=6457e10b-b1fa-436d-8dd5-65bb50064608',
                nombreMatch1: 'Maria',
                chatMatch1: 'Si!! Dile a David',
                imagenMatch2: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/david.png?alt=media&token=bfcc42c1-d536-40bd-a98f-437d2a37feb7',
                nombreMatch2:'David',
                chatMatch2: 'Super!!, Estará genial',
            }, 
            {
                nombre: 'Limpiando Chapultepec',
                slug: 'limpiando-chapultepec',
                imagenMatch1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/karen.png?alt=media&token=516a81bf-f0c1-41f3-b6b6-dcd228881a81',
                nombreMatch1: 'Karen',
                chatMatch1:'Yo llevo las bolsas!',
                
            },
        ]
     }

    render(){
        return(
            <>
            <div className="chatPerfilMain"><h2>Chat</h2></div>
                      
                    {this.state.listadoChats.map((e)=>{
                        return(                
                            <div >
                                <div className='boxchatPerfilMain' >
                                   <Link to= {`/evento/${e.slug}`}>  <h4><strong>{e.nombre} </strong></h4> </Link>
                                    <div className='subboxChatPerfilMain'>
                                        <img src={e.imagenMatch1}  alt={e.nombreMatch1}/> 
                                        <div>
                                            <strong>{e.nombreMatch1} </strong> <br/>
                                            {e.chatMatch1}
                                        </div>
                                    </div>
                                    <div className='subboxChatPerfilMain'>
                                        <img src={e.imagenMatch2}  alt={e.nombreMatch2}/> 
                                        <div>
                                            <strong>{e.nombreMatch2}</strong> <br/>
                                            {e.chatMatch2}
                                        </div>
                                    </div>
                                </div>
                            </div>

                                   
                                )}
                            )}     
            </>
             
        )
    }
}

export default Chat