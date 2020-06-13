import React from 'react';
import '../estilos/_description.sass';



class Preferences extends React.Component{
    render(){
        return (
                 <div> 
                    <strong className='titleboxDescriptionProfile'> Mis intereses </strong>
                    <div className='boxDescriptionProfile'> 
                        <div className='containerAtributesDescriptionProfile'> 
                            <div className='hobbiesDescriptionProfile'> Conciertos </div>
                            <div className='hobbiesDescriptionProfile'>  Voluntariado </div>
                            <div className='hobbiesDescriptionProfile'> Teatro</div>
                            <div className='hobbiesDescriptionProfile'> Tertulias </div>
                            <div className='hobbiesDescriptionProfile'> Opera </div>
                            <div className='hobbiesDescriptionProfile'> Maratones </div>
                            <div className='hobbiesDescriptionProfile'> Conferencias Mkt </div>
                            <div className='hobbiesDescriptionProfile'> Exposiciones </div>  
                            <div className='hobbiesDescriptionProfile'> Jazz </div>  
                            <div className='hobbiesDescriptionProfile'> Cine </div>  
                        </div>
                    </div>
                </div>
        )
    }
}

export default Preferences