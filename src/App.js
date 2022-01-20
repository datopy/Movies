import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Components
import Header from './Components/Header';
import Movie from './Components/Movie';

const movies_api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";


const App = () => {

  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios.get(movies_api).then((response) => {
      setMovies(response.data.results);
      
    });
  }, []);

  console.log(movies);
  return(

      <div>
        <Header />
        <div className='movie-container'>
        {movies.length > 0 && movies.map( (movie) => (
          <Movie key={movie.id} {...movie}  />
        ))}
        </div>
      </div>

  )
}

export default App;