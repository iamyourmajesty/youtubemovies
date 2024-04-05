import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const YouTubeEmbed = ({ videoId = 'MWQxBZs75K0'}) => {
  return (
    <div>
    <LiteYouTubeEmbed
        id={videoId} 
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        adNetwork={true} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
        params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
        playlist={false} // Use true when your ID be from a playlist
        playlistCoverId="L2vS_050c-M" // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
        poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
        noCookie={true} // Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
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