import React from 'react';
import Hero from './Hero/Hero';
import DescriptionProfile from './Description/DescriptionProfile';
import EventProfile from './Event/EventProfile';
import ChatProfile from './Chat/ChatProfile';
import './estilos/_profile.sass';


class Profile extends React.Component{
    render(){
       return (
        <div className='Profile'>
            <Hero/>
            <DescriptionProfile />
            <EventProfile />
            <ChatProfile />
        </div>

    ) 
    }
}

export default Profile