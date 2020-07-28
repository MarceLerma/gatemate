import React from 'react';
import Details from './Details';
import Pictures from './Pictures';
import Preferences from './Preferences';
import '../estilos/_profile.sass';


class DescriptionProfile extends React.Component{
    render(){
        return (
            <div className="descriptionProfile">
                <Details />
                <Pictures />
                <Preferences/>
            </div>
                
        )  
    }
}

export default DescriptionProfile