import React from 'react';
import MovieRating from './movierating'


const Ratingheader = ({changeclick,number}) => {
    
    return(
    

        <div className="movie-header-rating">
            <div className="movie-header-rating-text">
                <h3><b>Minimun Rating</b></h3>
                <div className="movie-header-rating-icon">
                    <MovieRating Change={(el)=> {changeclick(el)}} number={number}/>
                </div>
            </div>
        </div>


)
}


export default Ratingheader;