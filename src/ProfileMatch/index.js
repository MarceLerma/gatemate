import React from 'react';
import like from '../assets/like.png';
import './estilos/_descriptionmatch.sass';
import './estilos/_heromatch.sass';
import './estilos/_profilematch.sass';


class ProfileMatch extends React.Component{
    state={
        profile:      
                {
                    name: 'Maria Cervantez',
                    picture: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/maria.png?alt=media&token=6457e10b-b1fa-436d-8dd5-65bb50064608',
                    descripcion: 'Siempre estoy a la búsqueda de nuevos eventos a los cuales ir, me gusta sobretodo asistir a eventos en los cuales se vea la creatividad artística de expositores latinos ',
                    fotos: {
                        fotoperfil1: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil1.2.PNG?alt=media&token=6eaf563a-6647-4810-aa5f-fee693a6ca28',
                        fotoperfil2:'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil2.2.PNG?alt=media&token=8cb9a5b1-4474-4e52-841d-a350e1503548',
                        fotoperfil3: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil3.2.png?alt=media&token=045b9993-9521-4695-8aa7-0fd961e61117',
                        fotoperfil4: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil4.2.png?alt=media&token=a95f5a66-1642-4576-9847-f0a4f51c856f',
                        fotoperfil5: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil5.2.png?alt=media&token=cec32603-2c3a-4537-8025-0d05700262ac',
                        fotoperfil6: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil6.2.png?alt=media&token=da563f38-a9c6-4dcf-8338-94b76696730a',
                        fotoperfil7: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil7.2.png?alt=media&token=aa749cdd-5522-43f0-96ba-8a9af5a8c71f',
                        fotoperfil8: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil8.2.png?alt=media&token=9fcd4379-65da-4226-9f5a-4d1d70800182',
                        fotoperfil9: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil9.2.png?alt=media&token=2570751b-a14f-4d30-bf33-b8cdb9df5a4e',
                        fotoperfil10: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil10.2.png?alt=media&token=e681ddf8-0375-42a7-8484-afcf9733bd03',
                        fotoperfil11: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil11.2.png?alt=media&token=84e9b8e5-b88b-420e-ab90-7073a8f8b41f',
                        fotoperfil12: 'https://firebasestorage.googleapis.com/v0/b/getmate-feb4e.appspot.com/o/fotoperfil12.2.png?alt=media&token=50dbb144-f518-47db-829b-0375394a3760',
                        },
                    cualidades: {
                        cualidad1: 'Viajera 👍',
                        cualidad2: 'Alegre 👍',
                        cualidad3: 'Extrovertida 👍',
                        cualidad4: 'Alegre 👍',
                        cualidad5: 'Saludable 👍',
                        cualidad6: 'Espontanea 👍',
                        cualidad7: 'Petfriendly 👍',
                        cualidad8: 'Godinez 👍',
                        cualidad9: 'Fiestera 👍',
                    },
                
                    hobbies: {
                        hobbie1: 'Conciertos',
                        hobbie2: 'Jazz',
                        hobbie3: 'Webinars',
                        hobbie4: 'Opera',
                        hobbie5: 'Maratones',
                        hobbie6: 'Conferencias Mkt',
                        hobbie7: 'Exposiciones',
                        hobbie8: 'Jazz',  
                        hobbie9: 'Cine',
                        hobbie10: 'Opera',
                        } 
                },        
                
            quality1: 0,
            quality2: 0,
            quality3: 0,
            quality4: 0,
            quality5: 0,
            quality6: 0,
            quality7: 0,
            quality8: 0,
            quality9: 0,
    
    }

    cualidad1(){
        this.setState({quality1:this.state.quality1 + 1});
    };
    cualidad2(){
        this.setState({quality2:this.state.quality2 + 1});
    };
     cualidad3(){
        this.setState({quality3:this.state.quality3 + 1});
    };
     cualidad4(){
        this.setState({quality4:this.state.quality4 + 1});
    };
    cualidad5(){
        this.setState({quality5:this.state.quality5 + 1});
    };
    cualidad6(){
        this.setState({quality6:this.state.quality6 + 1})
    }
    cualidad7(){
        this.setState({quality7:this.state.quality7 + 1})
    }
    cualidad8(){
        this.setState({quality8:this.state.quality8 + 1})
    }
    cualidad9(){
        this.setState({quality9:this.state.quality9 + 1 })
    }

    

    render(){

        //const filtroUser=  this.state.profile.filter( (e) => 
                
               // { return e.name === this.props.match.params.name
            
              //  })

        return (

             //<>
            
           // {filtroUser.map((e)=> {
                //return ( 
                    <div  className='ProfileMatch'>
                     <div className="profileHeroMatch">
                        <div><img src={this.state.profile.picture} /></div>
                        <div><strong> {this.state.profile.name} </strong></div>
                    </div> 
                    <div className="descriptionProfileMatch"> 
                        <div>
                            <strong className='titleboxDescriptionProfileMatch'> Acerca de mi </strong>
                            <div className='boxDescriptionProfileMatch'> 
                                <div className='containerAtributesDescriptionProfileMatch'> 
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad1(e)}}> {this.state.profile.cualidades.cualidad1} {this.state.quality1} </button>
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad2(e)}}>  {this.state.profile.cualidades.cualidad2} {this.state.quality2}</button>
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad3(e)}}> {this.state.profile.cualidades.cualidad3} {this.state.quality3}</button>
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad4(e)}}> {this.state.profile.cualidades.cualidad4} {this.state.quality4}</button>
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad5(e)}}> {this.state.profile.cualidades.cualidad5} {this.state.quality5}</button>
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad6(e)}}> {this.state.profile.cualidades.cualidad6} {this.state.quality6}</button>
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad7(e)}}> {this.state.profile.cualidades.cualidad7} {this.state.quality7}</button>
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad8(e)}}> {this.state.profile.cualidades.cualidad8} {this.state.quality8}</button> 
                                    <button className='atributesDescriptionProfileMatch' onClick={(e)=>{this.cualidad9(e)}}> {this.state.profile.cualidades.cualidad9} {this.state.quality9} </button>   
                                </div>
                                <div>{this.state.descripcion}</div>
                            </div>
                        </div>
                        <div> 
                            <strong className='titleboxDescriptionProfileMatch'> Mis fotos </strong>
                            <div className='boxDescriptionProfileMatch'> 
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil1}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil2}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil3}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil4}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil5}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil6}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil7}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil8}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil9}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil10}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil11}/>
                                <img className='imagenPerfilMatch' src={this.state.profile.fotos.fotoperfil12}/>
                            </div>
                        </div>
                        <div> 
                            <strong className='titleboxDescriptionProfileMatch'> Mis intereses </strong>
                            <div className='boxDescriptionProfileMatch'> 
                                <div className='containerAtributesDescriptionProfileMatch'> 
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie1}</div>
                                    <div className='hobbiesDescriptionProfileMatch'>  {this.state.profile.hobbies.hobbie2}</div>
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie3}</div>
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie4}</div>
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie5} </div>
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie6}</div>
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie7}</div>
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie8}</div>  
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie9}</div>  
                                    <div className='hobbiesDescriptionProfileMatch'> {this.state.profile.hobbies.hobbie10} </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
               // )})}

             //</>   
            )}
}


export default ProfileMatch