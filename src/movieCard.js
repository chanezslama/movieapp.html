import React from 'react';
import MovieRating from './movierating'


const MovieCard = (props) => {
    const {movie = {}} = props
    const {
        rating = 0,
        image = 'https://www.nocowboys.co.nz/images/v3/no-image-available.png',
        title = '',
    } = movie

      return (


        <div className="movie-List-item-movie">
        <div className="movie-List-item-rating">
            <MovieRating number={rating}/>
        </div>
        <div className="movie-List-item-image">
            <img className="movie-List-item-image-item" src={image}/>
        </div>
        <div className="movie-List-item-title">
            <p>{title}</p>
        </div>
    </div>

);
}

        
export default MovieCard;