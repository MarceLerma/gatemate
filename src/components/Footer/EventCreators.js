import React from 'react'; 
import {Link} from "react-router-dom";
import '../estilos/sass/_footer.sass';

function EventCreators () {
    return (
        <div className="creadoresFooter">
            <h4> <strong>Creadores de eventos</strong>  </h4> 
            <Link to=" "><h5> ¿Cómo tener acceso a subir eventos? </h5></Link> 
            <Link to=" "><h5> ¿Cómo subir un evento?</h5></Link> 
            <Link to=" "><h5> FAQ</h5></Link>
        </div>
    )
}

export default EventCreators