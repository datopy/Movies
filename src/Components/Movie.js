import React from 'react';

const images_api = "https://image.tmdb.org/t/p/w1280";


const Movie = ({title, poster_path, overview, vote_average}) => {

    return(
        <div className='movie'>
            <img src={images_api + poster_path} alt={title}  />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

            <div className='overview'>
                <h2>Overview: </h2>
                <h3>{overview}</h3>
            </div>
        </div>
        
        

    )
}


export default Movie