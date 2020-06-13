import React from 'react';
import '../estilos/_description.sass';



class Details extends React.Component{
    render(){
        return (
                <div> 
                    <strong className='titleboxDescriptionProfile'> Acerca de mi </strong>
                    <div className='boxDescriptionProfile'> 
                        <div className='containerAtributesDescriptionProfile'> 
                            <div className='atributesDescriptionProfile'> Melómana </div>
                            <div className='atributesDescriptionProfile'>  Amigable </div>
                            <div className='atributesDescriptionProfile'> Amante de libros </div>
                            <div className='atributesDescriptionProfile'> Alegre </div>
                            <div className='atributesDescriptionProfile'> Fitness </div>
                            <div className='atributesDescriptionProfile'> Espontánea </div>
                            <div className='atributesDescriptionProfile'> Pet friendly </div>
                            <div className='atributesDescriptionProfile'> Godinez </div> 
                            <div className='atributesDescriptionProfile'> Independiente </div>   
                        </div>
                        <div> Me gusta conocer gente que con pasatiempos afines a los mios, ya que busco compartir experiencias que se disfruten en común para así tener una buena plática e ir forjando una amistad! </div>
                    </div>
                </div>

        )
    }
}

export default Details