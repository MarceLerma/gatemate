import React from 'react';
import '../estilos/sass/_header.sass';


function Search (){
    return (      
        <div className="buscadorHeader">
            <input type="text" placeholder="Buscar evento" className="buscadorHeaderHijo"/>
        </div>
    )
}

export default Search