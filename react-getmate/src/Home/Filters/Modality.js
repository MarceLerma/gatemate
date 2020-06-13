import React from 'react';
import '../estilos/_search.sass';

class Modality extends React.Component{
    render(){
        return(
            <form action="" className="formSearchMain">
                <p className="subtituloSearchMain">Modalidad</p> 
                <div className="optionsSearchMain">
                    <ul>
                        <input type="checkbox" id="virtualModalidad" name="virtualModalidad"/>
                        <label for="virtual"> Virtual</label>
                    </ul>
                    <ul>
                        <input type="checkbox" id="presencialModalidad" name="presencialModalidad"/>
                        <label for="presencial"> Presencial</label>
                    </ul>
                </div>
            </form>
        )
    }
}

export default Modality