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
                        },
                    cualidades: {
                        cualidad1: 'Melómana 👍',
                        cualidad2: 'Amigable 👍',
                        cualidad3: 'Amantelibros 👍',
                        cualidad4: 'Alegre 👍',
                        cualidad5: 'Fitness 👍',
                        cualidad6: 'Espontanea 👍',
                        cualidad7: 'Petfriendly 👍',
                        cualidad8: 'Godinez 👍',
                        cualidad9: 'Independiente 👍',
                    },
                
                    hobbies: {
                        hobbie1: 'Voluntariado',
                        hobbie2: 'Teatro',
                        hobbie3: 'Tertulias',
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