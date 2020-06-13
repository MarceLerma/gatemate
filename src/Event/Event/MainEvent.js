import React from 'react';
import '../estilos/_eventChild.sass';


class MainEvent extends React.Component{
    render(){
       return (
        <div className='eventChild'>
            <div className='PictureEvent'>
                {this.props.children} <br/>
                <button className='botonEvent' > Quiero ir</button>
            </div>
            <div>
               <strong> <h1> {this.props.eventName} </h1></strong>
                <div className= 'detailEvent'>
                    <img className='ImgEvent' src="/Recursos/calendario.png" alt="Calendadrio" /> 
                    {this.props.fecha}
                </div>
                <div className= 'detailEvent'>
                    <img className='UbicacionImgEvent' src="/Recursos/ubicacion.png" alt="Ubicación" /> 
                    {this.props.ubicacion}
                </div>
                <div className= 'detailEvent'>
                    <img className='ImgEvent' src="/Recursos/costo.png" alt="Costo" /> 
                    {this.props.costo}
                </div>
            </div>
       </div>

        ) 
    }
}

export default MainEvent