import React from 'react';
import Filters from './Filters/Filters';
import ProfileHome from './ProfileHome/ProfileHome';
import Categories from './Categories/Categories';
import './_body.sass';

class Home extends React.Component{
    state={
        modalidad: 'Presencial',
        costo: 0,
        distancia: 0.5,
        momentoDelDia: ['Tarde'],
        diaDeLaSemana: ['Sábado'] 
            }

        filtro (){
            this.setState({
                
            })
        }
    render(){
       return (
        <div className='Body'>
                <ProfileHome/>
                <Categories/>
                <Filters />              
        </div>

    ) 
    }
}

export default Home 