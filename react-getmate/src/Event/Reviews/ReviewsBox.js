import React from 'react';
import '../estilos/_reviews.sass';


class ReviewsBox extends React.Component{
    render(){
       return (
        <div className='ReviewsBox'>
            <div>{this.props.children}</div>
            <div>    
                <strong>{this.props.name}</strong> {this.props.time}<br/>
                {this.props.reseña}
            </div>
        </div>

        ) 
    }
}

export default ReviewsBox