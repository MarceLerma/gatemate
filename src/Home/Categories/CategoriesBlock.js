import React from 'react';
import '../estilos/_contenido.sass';

class CategoriesBlock extends React.Component{
    render(){
        return(
            <div className="boxsCategoriasContenidoMain">
                    <div className="subBoxsCategoriasContenidoMain" > 
                        Conciertos
                    </div>
                    <div className="subBoxsCategoriasContenidoMain"> 
                        Culturales
                    </div>
                    <div className="subBoxsCategoriasContenidoMain">
                        Vida nocturna
                     </div>
                    <div className="subBoxsCategoriasContenidoMain"> 
                        Deportes
                    </div>
                    <div className="subBoxsCategoriasContenidoMain" >
                        Profesionales
                     </div>
                    <div className="subBoxsCategoriasContenidoMain">
                        Alternativos
                     </div>
            </div>

        )
    }
}

export default CategoriesBlock 

