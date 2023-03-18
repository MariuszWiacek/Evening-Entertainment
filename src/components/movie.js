import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://www.omdbapi.com/', {
          params: {
            apikey: 'b4e12eac',
            s: 'a a a',
            type: 'movie',
          
          },
        });
        const { Search } = response.data;
        if (Search && Search.length > 0) {
          const randomIndex = Math.floor(Math.random() * Search.length);
          const movieResponse = await axios.get('http://www.omdbapi.com/', {
            params: {
              apikey: 'b4e12eac',
              i: Search[randomIndex].imdbID,
            },
          });
          setMovieData(movieResponse.data);
        } else {
          setError('No movies found');
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div><h2 style={{color: "red", alignItems: "top",paddingBottom:"2%"}}>What about a movie night? </h2></div>
      <img style={{float:"left", maxHeight: "400px", maxWidth: "300px", width: "50%", paddingRight:"2%"}} src={movieData.Poster} alt={movieData.Title} />
      <h2 style={{ color: "orange", textAlign:"center"}}><strong>{movieData.Title}</strong></h2>
      <p style={{textAlign:"left"}}><em>{movieData.Plot}</em></p>
      <p ><em>Rating : {movieData.imdbRating}</em></p>
      <p ><em>Released : {movieData.Released}</em></p>
     
    </div>
  );
};

export default Movie;
