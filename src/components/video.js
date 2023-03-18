import React,  { useState }   from 'react';
import { useEffect } from 'react'
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
  const [videoId, setVideoId] = useState('');

  const funnyVideoIds = [
    'dQw4w9WgXcQ',
    'uLTIowBF0kE',
    'G7RgN9ijwE4',
    '-5sBc1nCJ4M',
    'kKjGnZlJbtQ',
    'sP4NMoJcFd4',
    '8MvX9xJq7pM',
    'cYlSvqwWoP4',
    'k0GQSJrpVhM',
    'xzsWR0qdjBs',
    'Q5zckrKjZi0',
    '1n5mdDTkX9M',
    'DdAdEVzLXI8',
    'aJP03d3pNYM',
    'rlR4PJn8b8I',
    'gCVMkKgs3u0',
    '3qMhY2O6GkA',
    'x6QZn9xiuOE',
    'r5UxySAZNOc',
    'Bjs1L_9LXNo'
  ];
  

  const opts = {
    height: '415',
    width: '660',
    playerVars: {
      autoplay: 0
    }
  };

  const getRandomVideoId = () => {
    const randomIndex = Math.floor(Math.random() * funnyVideoIds.length);
    return funnyVideoIds[randomIndex];
  };

  const onPlayerError = (event) => {
    // Play the next video if the current one is not available
    setVideoId(getRandomVideoId());
  };

  useState(() => {
    setVideoId(getRandomVideoId());
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 468px)").matches;

    if (isMobile) {
      opts.height = '240';
      opts.width = '360';
    }
  }, []);


  return (
    <div className='video'>
            <h2>Have a laugh with a funny video </h2>

      {videoId && <YouTube videoId={videoId} opts={opts} onError={onPlayerError} />}
    </div>
  );

 


};

export default YouTubePlayer;


