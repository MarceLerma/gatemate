import React from 'react'; 
import Users from './Users';
import EventCreators from './EventCreators';
import Us from './Us';
import '../estilos/sass/_footer.sass';


function Footer (){
    return (
        <footer className="Footer">
            <Users/>
            <EventCreators />
            <Us />
            <div className="sloganFooter">las personas que se tienen que encontrar se <strong>encuentran ... aquí</strong></div>  
        </footer>
       )
    }

export default Footer
