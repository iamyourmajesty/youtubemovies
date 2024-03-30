import React from 'react'
import YouTubeEmbed from './YouTubeEmbed'

const Movie = ({videoIdList}) => {
 console.log('videolist ',videoIdList)

  
  async function postData()
  {
    // Example usage
const data = {
  southMovieList : ['lalu','malu'],
     bollywoodMovieList : ['lalu','malu'],
     bhojpuriMovieList : ['lalu','malu'],
     horrorMovieList : ['lalu','malu'],
     commedyMovieList : ['lalu','malu'],
};

try{
 await fetch('https://youtube-moviebackend.vercel.app/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log('data is pushed to database')
}
catch(error)
{
  console.log('unable to push data to database',error)
}
  }


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