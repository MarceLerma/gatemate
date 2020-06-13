import React from 'react'; 
import {Link} from "react-router-dom";
import '../estilos/sass/_footer.sass';

function Us () {
    return (
        <div className="nosotrosFooter">
            <h4> <strong>Nosotros</strong>  </h4> 
            <Link to=" "><h5>¿Qué es getMate?</h5></Link> 
            <Link to=" "><h5> ¿Cómo funciona?</h5></Link> 
            <Link to=" "><h5> Contáctanos</h5></Link>
            <Link to=" "><h5> Política de privacidad</h5></Link>
        </div>
    )
}

export default Us
