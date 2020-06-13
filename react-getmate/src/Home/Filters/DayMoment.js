import React from 'react';
import '../estilos/_search.sass';

class DayMoment extends React.Component{
    render(){
        return(
            <form action="">
                <p className="subtituloSearchMain">Momento del día</p>
                <div className="optionsSearchMain">
                    <ul>
                        <input type="checkbox" id="mañanaMomentoDia" name="mañanaMomentoDia"/>
                        <label for="mañana"> Mañana</label>
                    </ul>
                    <ul>
                        <input type="checkbox" id="tardeMomentoDia" name="tardeMomentoDia"/>
                        <label for="tarde"> Tarde</label>
                    </ul>
                    <ul>
                        <input type="checkbox" id="nocheMomentoDia" name="nocheMomentoDia"/>
                        <label for="noche"> Noche</label>
                    </ul>
                </div>
            </form>
        )
    }
}

export default DayMoment