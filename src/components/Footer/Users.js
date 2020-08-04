import React from 'react'; 
import {Link} from "react-router-dom";
import '../estilos/sass/_footer.sass';

function Users () {
    return (
         <div className="usuariosFooter">
            <h4> <strong>Usuarios</strong>  </h4> 
            <Link to=" "><h5> ¿Cómo funciona getMate? </h5></Link> 
            <Link to=" "><h5> ¿Cómo hacer mi perfil?</h5></Link> 
            <Link to=" "><h5> FAQ</h5></Link>
        </div>
    )
}

export default Users