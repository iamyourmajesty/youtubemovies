import { useContext, useEffect, useState } from 'react';
import './App.css';
import Movie from './Components/Movie';
import { AppContext } from './Context/AppContext';
import axios from 'axios';
import Spinner from './Components/Spinner'
import YouTubeEmbed from './Components/YouTubeEmbed';


const API_KEY = process.env.REACT_APP_API_KEY;
console.log('apikey',typeof(API_KEY),API_KEY)
let key = "AIzaSyAUSrPhDZ7op2mFq3J5ujk4QGUAZe5kyng"

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
// await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
// params: {
//   key : `${API_KEY}`,
//   part: 'snippet',
//   type: 'video',
//   q: query , // Your search query
//   maxResults: 20, // Number of results you want to fetch
//   order: 'viewCount', // Sort by view count
//   videoDuration : 'long',
// }
// })
// .then((response) => {
// // Extract video IDs from the response

// const videoIds = response.data.items.map((item) => item.id.videoId);
fetch(`https://www.googleapis.com/youtube/v3/search?key==${API_KEY}&part=snippet&type=video&q=${query}&maxResults=20&order=viewCount&videoDuration=long`)
  .then(response => response.json())
  .then(data => {
    const videoIds = data.items.map(item => item.id.videoId);
    // lal ala lala


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


saveDatatomgd()
// Output the list of video URLs
//   console.log(videoUrls);
})
.catch((error) => {
  getdatafrommdb()
console.error('Error fetching videos:', error);
return null
});

setLoading(false)
  }

  async function getdatafrommdb()
  {
    setLoading(true)
    try{
      const res = await fetch('https://youtube-moviebackend.vercel.app/getdata')
      const data = await res.json()
      console.log('data from database',data)
      setSouthMovieList(data.product.southMovieList)
      setBhojpuriMovieList(data.product.bhojpuriMovieList)
      setBollywoodMoieList(data.product.bollywoodMovieList)
      setHorrorMoiveList(data.product.horrorMovieList)
      setCommedyMovieList(data.product.commedyMovieList)
    }
    catch(error)
    {
      console.log('got error while getting data from database',error)
    }
    setLoading(false)
  }
  
  async function postData()
  {
    // Example usage
const data = {
    southMovieList : southMovieList,
     bollywoodMovieList : bollywoodMovieList,
     bhojpuriMovieList : bhojpurMovieList,
     horrorMovieList : horrorMovieList,
     commedyMovieList : commedyMovieList,
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
  // get details from database and set it
  console.log('unable to push data to database',error)
}
  }

  function saveDatatomgd()
  {
    if(southMovieList.length !== 0 && bhojpurMovieList.length !==0 && bollywoodMovieList.length !== 0 && horrorMovieList.length !==0 && commedyMovieList !== 0) 
    {
      postData();
    }

  }
  
  useEffect( () => {
   fetchDataa('SouthMovie')
   fetchDataa('BhojpuriMovie')
   fetchDataa('BollywoodMovie')
    fetchDataa('HorrorMovie')
    fetchDataa('CommedyMovie')
  },[])

  return (
    <div className="App overflow-hidden">
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
    
    </div>
  );
}

export default App;
