import React from 'react';


const MovieRating = ({number,Change = () => {}}) =>{

  let ratingtab =[]
  for(let i=0 ; i<5 ; i++){
    if (i < number){
      ratingtab.push(<img onClick={()=> Change(i+1)} key={i} src="https://img.icons8.com/plasticine/48/000000/star.png" />)
    }
    else{
      ratingtab.push(<img onClick={()=> Change(i+1)} key={i} src="https://img.icons8.com/carbon-copy/48/000000/star.png"/>)
    }
  }
     return (
      <div className="movie-rating">
        {ratingtab}
      </div>

)
}
export default MovieRating;