import React, { Component } from 'react';
import Movieheader from './movieHeader'
import Ratingheader from './RatingHeader'
import MovieList from './movieList'
import './App.css';

const movieTab = [
  {
    rating : 4,
    image : 'https://images-na.ssl-images-amazon.com/images/I/517oG6pSseL.jpg',
    title :'Titanic - 1997'

  },
  {
    rating : 5,
    image : 'http://fr.web.img3.acsta.net/pictures/210/453/21045319_2013101714250983.jpg',
    title :'The hunger games - 2012'

  },
  {
    rating : 2,
    image : 'https://cdn.egy.best/serve/movies/art-0022887384-x300.jpg',
    title :'This means war - 2012'
    
  },
  {
    rating : 4,
    image : 'https://images-na.ssl-images-amazon.com/images/I/7151Qmxd3pL._SY679_.jpg',
    title :'The mummy - 1999'

  },
  {
    rating : 3,
    image : 'https://i.pinimg.com/originals/f6/c0/14/f6c01414453247ed79b7116188afdce6.jpg',
    title :'The mummy returns- 2001'

  }
]



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      minRationg : 1,
      movieList: movieTab,
      titleList : '',
      isLoading:true

    }
  }
  
    addnewMovie(x) {
      this.setState({
        movieList: console.log(this.state.movieList.push(x))
      })
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({
          isLoading:false
        })
      }, 5000);
    }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Movieheader val={this.state.titleList}
          onchange ={(el) =>{
            this.setState({titleList :el})
          }}/>
          <Ratingheader 
          number={this.state.minRationg}
          changeclick={(el)=> {
            this.setState({minRationg : el})
          }}/>
        </div>
        <MovieList 
        
          isLoading={this.state.isLoading}

          addmovie={(newMovie)=> this.addnewMovie(newMovie)}
          
          movieList={movieTab.filter(el => 
          el.rating > this.state.minRationg && el.title.toLowerCase().includes(this.state.titleList.toLowerCase()))}/>
          
      </div>
    );
  }
}

export default App;
