import React from 'react';
import '../estilos/_search.sass';

export default function Categories({ categoriesHandler }) {
        return(
            <div>
                <p className="subtituloSearchMain"><strong>Categorías</strong></p>
                <div className="optionsSearchMain">
                    <ul>
                        <input 
                            type="radio" 
                            name="categorias"
                            value="alternativos"
                            onClick={e=> {
                                categoriesHandler('alternativos', e.target.checked);
                            }}
                        />
                        <label for="alternativos"> Alternativos</label>
                    </ul>
                    <ul>
                        <input 
                            type="radio"  
                            name="categorias"
                            value="conciertos"
                            onClick={e => {
                                categoriesHandler('conciertos', e.target.checked);
                            }}/>
                        <label for="categorias"> Conciertos</label>
                    </ul>
                    <ul>
                        <input 
                            type="radio"  
                            name="categorias"
                            value="culturales"
                            onClick={e => {
                                categoriesHandler('culturales', e.target.checked);
                            }}/>
                        <label for="categorias"> Culturales</label>
                    </ul>
                    <ul>
                        <input 
                            type="radio"  
                            name="categorias"
                            value="deportes" 
                            onClick={e => {
                                categoriesHandler('deportes', e.target.checked);
                            }}/>
                        <label for="categorias"> Deportes</label>
                    </ul>
                    <ul>
                        <input 
                            type="radio"  
                            name="categorias"
                            value="profesionales"
                            onClick={e => {
                                categoriesHandler('profesionales', e.target.checked);
                            }}/>
                        <label for="categorias"> Profesionales</label>
                    </ul>
                    <ul>
                        <input 
                            type="radio"  
                            name="categorias"
                            value="vidaNocturna"  
                            onClick={e => {
                                categoriesHandler('vidaNocturna', e.target.checked);
                            }}/>
                        <label for="categorias"> Vida Nocturna</label>
                    </ul>
                    <ul>
                        <input 
                            type="radio"  
                            name="categorias"
                            value="todos"
                            onClick={e => {
                                categoriesHandler('todos', e.target.checked);
                            }}/>
                        <label for="categorias"> Todos </label>
                    </ul>
                </div>
            </div>
        )
    }


