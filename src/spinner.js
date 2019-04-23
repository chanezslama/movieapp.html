import React  from 'react';
import spinner from './spinner.gif'



const Spinner = () =>{
    return(
            <div className="spinner-image">
                <img className="spinner-image-gif" src={spinner} alt="spinner"/>
            </div>

    )
}
export default Spinner ; 