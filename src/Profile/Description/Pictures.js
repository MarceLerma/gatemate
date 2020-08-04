import React from 'react';
import '../estilos/_description.sass';



class Pictures extends React.Component{
    state={
        fotoperfil1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil1.png?alt=media&token=b4a94840-a3ad-4620-8c59-4b9be0c72478',
        fotoperfil2:'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil2.png?alt=media&token=e76fb099-a7c0-408c-bead-4c0352a896c2',
        fotoperfil3: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil3.png?alt=media&token=8fcf254f-7a9c-46dd-b67a-c7152ef9c072',
        fotoperfil4: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil4.png?alt=media&token=680327b6-dbc0-4a09-ad73-38ca64ce96d2',
        fotoperfil5: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil5.png?alt=media&token=dad75f68-b5e4-44cd-916f-75fe8dbfc89c',
        fotoperfil6: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil6.png?alt=media&token=125376ce-1f72-4401-8391-25148be7f220',
        fotoperfil7: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil7.png?alt=media&token=5d8aa661-3a13-45e2-9ced-fdd20bc274fd',
        fotoperfil8: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil8.png?alt=media&token=9304210b-c2ab-4640-8033-737514d5b6ad',
        fotoperfil9: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil9.png?alt=media&token=efa9df60-548d-43e5-a587-3b60d95b0643',
        fotoperfil10: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil10.png?alt=media&token=cd59458a-1736-4835-8f75-c433df96d87e',
        fotoperfil11: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil11.png?alt=media&token=d6dff58a-734d-4685-8847-f35ec522acec',
        fotoperfil12: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil12.png?alt=media&token=20c8b971-569c-4b38-9027-17fd62813666',
    }
    render(){
        return (

                 <div> 
                    <strong className='titleboxDescriptionProfile'> Mis fotos </strong>
                    <div className='boxDescriptionProfile'> 
                        <img className='imagenPerfil' src={this.state.fotoperfil1}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil2}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil3}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil4}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil5}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil6}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil7}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil8}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil9}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil10}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil11}/>
                        <img className='imagenPerfil' src={this.state.fotoperfil12}/>
                    </div>
                </div>
        )
    }
}

export default Pictures