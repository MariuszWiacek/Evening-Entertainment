import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Movie = () => {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: '8ee992b90b940495186ee6aeb86fb4a8',
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
          page: Math.floor(Math.random() * 50) + 1, // Get a random page
        },
      });
      const { results } = response.data;
      if (results && results.length > 0) {
        const randomIndex = Math.floor(Math.random() * results.length);
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${results[randomIndex].id}`, {
          params: {
            api_key: '8ee992b90b940495186ee6aeb86fb4a8',
            language: 'en-US',
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

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const handleRefreshClick = () => {
    fetchData();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <img
        className="image1"
        style={{
          width: '330px',
          height: '480px',
          paddingRight: '2%',
          transition: 'transform 1s',
          cursor: 'pointer',
        }}
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        alt={movieData.title}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      />
      <div style={{ width: '50%' }}>
        <h2 style={{ color: 'orange', textAlign: 'center', padding: '0px' }}>
          <strong>{movieData.title}</strong>
        </h2>
        <p style={{ fontSize: '20px', textAlign: 'left' }}>
          <em>{movieData.overview}</em>
        </p>
        <p style={{ fontSize: '20px', textAlign: 'left' }}>
          <em>Rating : {movieData.vote_average}</em>
        </p>
        <p style={{ fontSize: '20px', textAlign: 'left' }}>
          <em>Released : {movieData.release_date}</em>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleRefreshClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Movie