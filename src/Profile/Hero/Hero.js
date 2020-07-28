import React from 'react';
import '../estilos/_hero.sass';


class Hero extends React.Component{
    state= {
        name: 'Marcela Lerma',
        picture: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil.png?alt=media&token=65c1a095-a8fd-49d6-b591-13e4fcbc525f'
    }
    render(){
        return (
            <div className="profileHero">
                    <div><img src={this.state.picture} /></div>
                    <div><strong> {this.state.name} </strong></div>
            </div> 
        )
    }
}

export default Hero