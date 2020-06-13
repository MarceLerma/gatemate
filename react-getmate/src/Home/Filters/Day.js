import React from 'react';
import '../estilos/_search.sass';


class Day extends React.Component{
    render() {
        return (
            <form action="">
                <p className="subtituloSearchMain"> Día de la semana </p>
                <div className="optionsSearchMain">
                    <ul>
                        <input type="checkbox" id="lunesDiaSemana" name="lunesDiaSemana"/>
                        <label for="lunes"> Lunes</label> 
                    </ul>
                    <ul>
                        <input type="checkbox" id="martesDiaSemana" name="martesDiaSemana"/>
                        <label for="martes"> Martes</label>
                    </ul>
                    <ul>
                        <input type="checkbox" id="martesDiaSemana" name="martesDiaSemana"/>
                        <label for="miercoles"> Miércoles</label> 
                    </ul>
                    <ul>
                        <input type="checkbox" id="juevesDiaSemana" name="juevesDiaSemana"/>
                        <label for="jueves"> Jueves</label>
                    </ul>
                    <ul>
                        <input type="checkbox" id="viernesDiaSemana" name="viernesDiaSemana"/>
                        <label for="viernes"> Viernes</label>
                    </ul>
                    <ul>
                        <input type="checkbox" id="sabadoDiaSemana" name="sabadoDiaSemana"/>
                        <label for="sabado"> Sábado</label>
                    </ul>
                    <ul>
                        <input type="checkbox" id="domingoDiaSemana" name="domingoDiaSemana"/>
                        <label for="domingo"> Domingo</label>
                    </ul>
                </div>
            </form> 

        )  
    }
}

export default Day 