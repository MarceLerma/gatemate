import React from 'react';
import '../estilos/_search.sass';

export default function Categories({ dayMomentHandler }) {
        return(
            <form >
                <p className="subtituloSearchMain"><strong>Momento del día</strong></p>
                <div className="optionsSearchMain">
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayMomentHandler('mañana', e.target.checked)}}/>
                        <label for="mañana"> Mañana</label>
                    </ul>
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayMomentHandler('tarde', e.target.checked)}}/>
                        <label for="tarde"> Tarde </label>
                    </ul>
                    <ul>
                        <input 
                            type="checkbox" 
                            onClick={e=> {
                                dayMomentHandler('noche', e.target.checked)}}/>
                        <label for="noche"> Noche</label>
                    </ul>
                </div>
            </form>
        )
    }


