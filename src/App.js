import { useContext, useEffect, useState } from 'react';
import './App.css';
import Movie from './Components/Movie';
import { AppContext } from './Context/AppContext';
import axios from 'axios';
import Spinner from './Components/Spinner'
import YouTubeEmbed from './Components/YouTubeEmbed';


const API_key = process.env.REACT_APP_API_KEY;
console.log('apikey',API_key)
function App() {

  const [loading ,setLoading] = useState(false)
  const [southMovieList,setSouthMovieList] = useState([])
  const [bollywoodMovieList,setBollywoodMoieList] = useState([])
  const [bhojpurMovieList,setBhojpuriMovieList] = useState([])
  const [horrorMovieList,setHorrorMoiveList] = useState([])
  const [commedyMovieList,setCommedyMovieList] = useState([])

  async function fetchDataa(query = 'SouthMovie')
  {
    setLoading(true)
      // Make a request to the YouTube Data API to search for videos
await axios.get('https://www.googleapis.com/youtube/v3/search', {
params: {
  key: 'AIzaSyDEN_IVN-rU1BWeKnHw_i9Ksh5KiKic-OI',
  part: 'snippet',
  type: 'video',
  q: query , // Your search query
  maxResults: 20, // Number of results you want to fetch
  order: 'viewCount', // Sort by view count
  videoDuration : 'long',
}
})
.then((response) => {
// Extract video IDs from the response
const videoIds = response.data.items.map((item) => item.id.videoId);

// Create an array of video URLs based on the video IDs
const videoUrls = videoIds.map((videoId) => `https://www.youtube.com/watch?v=${videoId}`);

if(query === 'SouthMovie')
setSouthMovieList(videoIds)
else if(query === 'BhojpuriMovie')
setBhojpuriMovieList(videoIds)
else if(query === 'BollywoodMovie')
setBollywoodMoieList(videoIds)
else if(query === 'HorrorMovie')
setHorrorMoiveList(videoIds)
else if(query === 'CommedyMovie')
setCommedyMovieList(videoIds)


// Output the list of video URLs
//   console.log(videoUrls);
})
.catch((error) => {
console.error('Error fetching videos:', error);
return null
});

setLoading(false)
  }

  
  useEffect( () => {
   fetchDataa('SouthMovie')
  //  fetchDataa('BhojpuriMovie')
  //  fetchDataa('BollywoodMovie')
  //   fetchDataa('HorrorMovie')
  //   fetchDataa('CommedyMovie')
  },[])

  return (
    <div className="App overflow-hidden">
    <YouTubeEmbed />
    <h1 className=' text-2xl md:text-4xl font-bold relative'>South Movies</h1>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={southMovieList }/>)
    }
    <h1 className=' text-2xl md:text-4xl font-bold relative'>Bollywood Movies</h1>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={bollywoodMovieList }/>)
    }
    <h1 className=' text-2xl md:text-4xl font-bold relative'>Bhojpuri Movies</h1>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={bhojpurMovieList }/>)
    }
    <h1 className=' text-2xl md:text-4xl font-bold relative'>Horror Movies</h1>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={horrorMovieList }/>)
    }
    <h1 className=' text-2xl md:text-4xl font-bold relative'>Commedy Movies</h1>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={commedyMovieList }/>)
    }
     
    </div>
  );
}

export default App;
