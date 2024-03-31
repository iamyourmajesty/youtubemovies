import React from 'react';

const YouTubeEmbed = ({ videoId = 'MWQxBZs75K0'}) => {
  return (
    <div className='video-responsive'>
      <iframe
        className=' rounded'
        width='300'
        height='230'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        loading="lazy"
        allowtransparency="true"
        encrypted-media
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
