import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
  const [videoId, setVideoId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomVideoId = useCallback(async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&type=video&maxResults=10&q=${searchQuery}`
      );
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.items.length);
      setVideoId(data.items[randomIndex].id.videoId);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching videos from API', error);
      setIsLoading(false);
      setVideoId(getRandomVideoId());
    }
  }, []);

  useEffect(() => {
    fetchRandomVideoId('funny');
  }, [fetchRandomVideoId]);

  const getRandomVideoId = () => {
    const videos = [      '9QbL9c_XrtE',      '2T-Ke5mD-Kk',      '0JfbJ9azbc',      'vnNeAzMs2zU',      'IFxZoAp0T-0',      '345TLg5IJLA',      'zylI-WV8ez8',      'G0oQ2okvLaE',      'g6PSwYx3jA0',      'AukduAXQ8rs',      'vHRmgv7beEE',      'dMH0bHeiRNg',      '8ur3WePhfX4',    ];
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
  };

  const handleNextClick = () => {
    fetchRandomVideoId('funny');
  };

  const handleParrotClick = () => {
    fetchRandomVideoId('funny parrots');
  };

  const handleCatClick = () => {
    fetchRandomVideoId('funny cats');
  };

  const handleDogClick = () => {
    fetchRandomVideoId('funny dogs');
  };

  const opts = {
    height: '415',
    width: '660',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="video">
      <h2>Have a laugh with a funny video</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <YouTube videoId={videoId} opts={opts} />
          <div className="button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <button className="button"  onClick={handleNextClick}>
              Next Video
            </button>
            <button className="button2"  onClick={handleParrotClick}>
              Parrots
            </button>
            <button className="button2" onClick={handleCatClick}>
              Cats
            </button>
            <button className="button2"  onClick={handleDogClick}>
              Dogs
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default YouTubePlayer;
