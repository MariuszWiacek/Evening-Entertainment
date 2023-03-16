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
            y: '2023',
          },
        });
        const { Search } = response.data;
        console.log(response.data)
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
      <h1 style={{color: '#db5100' }}>Watch latest realesed movie : </h1>
      <h2 style={{color: 'red' }}>{movieData.Title}</h2>
      <p>{movieData.Plot}</p>
      <img src={movieData.Poster} alt={movieData.Title} />
    </div>
  );
};

export default Movie;
