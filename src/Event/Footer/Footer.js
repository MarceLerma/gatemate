import React from 'react';
import '../estilos/_footer.sass';


class Footer extends React.Component{
    state={
        facebook: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/facebook.png?alt=media&token=64dd95c0-cfdf-4022-bf02-4a450650c085',
        instagram: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/instagram.png?alt=media&token=06399d2b-4236-4515-a43e-299e275d8d20',
        twitter: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/twitter.png?alt=media&token=ee8a1961-29a6-4890-a217-2bd0015d4628',
    }
    render(){
       return (
        <div className='FooterEvent'>
           Cuéntale a los demás 
           <img className='' src={this.state.facebook} alt="Facebook" />
           <img className='' src={this.state.instagram} alt="Instagram" />
           <img className='' src={this.state.twitter} alt="Twitter" />
        </div>

        ) 
    }
}

export default Footer