import React, { Component } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

class RandomFunnyVideoCard extends Component {
  state = {
    videoId: null,
  };

  componentDidMount() {
    this.getRandomVideo();
  }

  getRandomVideo = async () => {
    try {
      const searchTerms = [
        'funny',
        'hilarious',
        'comedy',
        'laughs',
        'jokes',
        
      ];

      const randomSearchTerm =
        searchTerms[Math.floor(Math.random() * searchTerms.length)];

      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: randomSearchTerm,
            type: 'video',
            maxResults: 50,
            key: 'AIzaSyBiCThRwC_-IiBlA1BEgLi8WQ4UT_OafJU',
          },
        }
      );

      const videos = response.data.items;
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];

      this.setState({ videoId: randomVideo.id.videoId });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { videoId } = this.state;

    return (
      <div>
        <h2>Some laugh with Funny Videos</h2>
        {videoId && (
          <YouTube
            videoId={videoId}
            opts={{ width: '640', height: '390' }}
          />
        )}
      </div>
    );
  }
}

export default RandomFunnyVideoCard;
