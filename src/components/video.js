import React,  { useState }   from 'react';
import { useEffect } from 'react'
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
  const [videoId, setVideoId] = useState('');

  const funnyVideoIds = [
    '2T-Ke5mD-Kk',
    '0JfbJ9azbc',
    'vnNeAzMs2zU',
    'IFxZoAp0T-0',
    '345TLg5IJLA',
    'zylI-WV8ez8',
    'G0oQ2okvLaE',
    'g6PSwYx3jA0',
    'AukduAXQ8rs',
    'vHRmgv7beEE',
    'dMH0bHeiRNg',
 
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


