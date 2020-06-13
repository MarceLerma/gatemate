import React from 'react';
import '../estilos/_description.sass';


class Details extends React.Component{
    render(){
       return (
        <div className='Details'>
            <div>
                <strong> Acerca de este evento </strong>
                <div className='DescriptionEvent'> {this.props.acercaEvento} </div>
            </div>
            <div className='PictureEvent'>
                {this.props.children}
            </div>
        </div>

        ) 
    }
}

export default Details
