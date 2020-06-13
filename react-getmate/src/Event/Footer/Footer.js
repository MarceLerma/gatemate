import React from 'react';
import '../estilos/_footer.sass';


class Footer extends React.Component{
    render(){
       return (
        <div className='FooterEvent'>
           Cuéntale a los demás 
           <img className='' src="/Recursos/facebook.png" alt="Facebook" />
           <img className='' src="/Recursos/instagram.png" alt="Instagram" />
           <img className='' src="/Recursos/twitter.png" alt="Twitter" />
        </div>

        ) 
    }
}

export default Footer