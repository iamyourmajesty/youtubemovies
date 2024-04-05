import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const YouTubeEmbed = ({ videoId = 'MWQxBZs75K0'}) => {
  return (
    <div>
    <LiteYouTubeEmbed
        id={videoId} 
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  </div>
  );
};

export default YouTubeEmbed;


{
  // <div className='video-responsive'>
  //   {
     
  //   //   <iframe
  //   //   className=' rounded'
  //   //   width='300'
  //   //   height='230'
  //   //   src={`https://www.youtube.com/embed/${videoId}`}
  //   //   title='YouTube video player'
  //   //   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  //   //   loading="lazy"
  //   //   allowtransparency="true"
  //   //   encrypted-media
  //   //   allowFullScreen
  //   // ></iframe>
     

    
  //   }

    
   
  //   <div>
  //   <LiteYouTubeEmbed
  //       id="MWQxBZs75K0"
  //       title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
  //   />
  // </div>
    
    
    
  //   </div>
}