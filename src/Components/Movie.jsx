import React from 'react'
import YouTubeEmbed from './YouTubeEmbed'

const Movie = ({videoIdList}) => {
//  console.log('videolist ',videoIdList)

  return (
    <div className=' w-screen flex gap-5 m-3 overflow-scroll '>
     {
      videoIdList &&
      videoIdList.map((item) => {
        return (
          <YouTubeEmbed  videoId={item} />
        )
      })
      
    }
    
     </div>
    
  )
}

export default Movie