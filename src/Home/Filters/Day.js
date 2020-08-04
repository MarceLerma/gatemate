import React from 'react';
import '../estilos/_search.sass';


export default function Categories({ dayHandler }) {
        return (
            <form action="">
                <p className="subtituloSearchMain"><strong> Día de la semana </strong></p>
                <div className="optionsSearchMain">
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayHandler('lunes', e.target.checked)}}
                            />
                        <label for="lunes"> Lunes</label> 
                    </ul>
                    <ul>
                        <input 
                            type="checkbox"
                            onClick={e=> {
                                dayHandler('martes', e.target.checked)}}/>
                        <label for="martes"> Martes</label>
                    </ul>
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayHandler('miercoles', e.target.checked)}}/>
                        <label for="miercoles"> Miércoles</label> 
                    </ul>
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayHandler('jueves', e.target.checked)}}/>
                        <label for="jueves"> Jueves</label>
                    </ul>
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayHandler('viernes', e.target.checked)}}/>
                        <label for="viernes"> Viernes</label>
                    </ul>
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayHandler('sabado', e.target.checked)}}/>
                        <label for="sabado"> Sábado</label>
                    </ul>
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayHandler('domingo', e.target.checked)}}/>
                        <label for="domingo"> Domingo</label>
                    </ul>
                </div>
            </form> 

        )  
    }


