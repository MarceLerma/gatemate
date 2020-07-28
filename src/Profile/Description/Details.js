import React from 'react';
import like from '../../assets/like.png';
import '../estilos/_description.sass';



class Details extends React.Component{
    state={
        melomana: 0,
        amigable: 0,
        amantelibros: 0,
        alegre: 0,
        fitness: 0,
        espontanea: 0,
        petfriendly: 0,
        godinez: 0,
        independiente: 0,
        descripcion: 'Me gusta conocer gente que con pasatiempos afines a los mios, ya que busco compartir experiencias que se disfruten en común para así tener una buena plática e ir forjando una amistad! ',
    }

    melomana(){
        this.setState({melomana:this.state.melomana + 1});
    };
    amigable(){
        this.setState({amigable:this.state.amigable + 1});
    };
     amantelibros(){
        this.setState({amantelibros:this.state.amantelibros + 1});
    };
     alegre(){
        this.setState({alegre:this.state.alegre + 1});
    };
    fitness(){
        this.setState({fitness:this.state.fitness + 1});
    };
    espontanea(){
        this.setState({espontanea:this.state.espontanea + 1})
    }
    petfriendly(){
        this.setState({petfriendly:this.state.petfriendly + 1})
    }
    godinez(){
        this.setState({godinez:this.state.godinez + 1})
    }
    independiente(){
        this.setState({independiente:this.state.independiente + 1 })
    }

    render(){
        return (
                <div> 
                    <strong className='titleboxDescriptionProfile'> Acerca de mi </strong>
                    <div className='boxDescriptionProfile'> 
                        <div className='containerAtributesDescriptionProfile'> 
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.melomana(e)}}> Melómana 👍  {this.state.melomana} </button>
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.amigable(e)}}>  Amigable 👍  {this.state.amigable}</button>
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.amantelibros(e)}}> Amante de libros 👍 {this.state.amantelibros}</button>
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.alegre(e)}}> Alegre 👍 {this.state.alegre}</button>
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.fitness(e)}}> Fitness 👍 {this.state.fitness}</button>
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.espontanea(e)}}> Espontánea 👍 {this.state.espontanea}</button>
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.petfriendly(e)}}> Pet friendly 👍 {this.state.petfriendly}</button>
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.godinez(e)}}> Godinez 👍 {this.state.godinez}</button> 
                            <button className='atributesDescriptionProfile' onClick={(e)=>{this.independiente(e)}}> Independiente 👍 {this.state.independiente} </button>   
                        </div>
                        <div>{this.state.descripcion}</div>
                    </div>
                </div>

        )
    }
}


export default Details