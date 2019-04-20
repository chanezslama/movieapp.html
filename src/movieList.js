import React from 'react';
import MovieCard from './movieCard'




const MovieList = ({movieList , addmovie}) => (
      
    <div className="movie-List"> 
      <div className="movie-List-item">
        {
          movieList.map((el,index) => <MovieCard key={index} movie={el} /> )
        }

        <div className="movie-List-item-movie">
          <div className="movie-List-item-image">
            <img onClick={()=> addmovie({                                  
              
              rating: 3,
              image:'https://i.pinimg.com/originals/8e/bf/34/8ebf340431d55e56a071baf14b0a523e.jpg',
              title: 'Night at the museum',
            }
            )

            }
            className="movie-List-item-image-item" src="http://www.elcolumnero.com/wp-content/uploads/2016/06/2b.png"/>
          </div>
          <div className="movie-List-item-title">
            <p> Add Movie </p>
          </div>
        </div>
      </div> 
    </div>     
)


export default MovieList;
