import React from 'react';


const Movieheader = ({val,onchange}) => {

    return(
    
    <div className="movie-header">
        <div className="movie-header-search">
            <input className="movie-header-search-text" 
            type="text" 
            placeholder="Type movie name to search" 
            value={val}
            onChange={(event) => 
                {onchange(event.target.value)}}
             />
            <input className="movie-header-search-button" type="button" value="Search"/>
        </div>
    </div>

)
}


export default Movieheader;


