import {  useEffect, useState } from 'react';
import './App.css';
import Movie from './Components/Movie';
import Spinner from './Components/Spinner'

const API_KEY = process.env.REACT_APP_API_KEY;
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
      // Making a request to the YouTube Data API to search for videos
fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${query}&maxResults=20&order=viewCount&videoDuration=long`)
  .then(response => response.json())
  .then(data => {
    const videoIds = data.items.map(item => item.id.videoId);
    // lal ala lala


// Creating an array of video URLs based on the video IDs
const videoUrls = videoIds.map((videoId) => `https://www.youtube.com/watch?v=${videoId}`);

if(query === 'South Movie')
{
  setSouthMovieList(videoIds)
  console.log(southMovieList)
}
else if(query === 'Bhojpuri Movie')
setBhojpuriMovieList(videoIds)
else if(query === 'Bollywood Movie')
setBollywoodMoieList(videoIds)
else if(query === 'Horror Movie')
setHorrorMoiveList(videoIds)
else if(query === 'Commedy Movie')
setCommedyMovieList(videoIds)



console.log('videoids',videoIds)
saveDatatomgd(query)
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

  function saveDatatomgd(query)
  {
//     console.log(query)
//     if(query === 'South Movie')
// {
//   console.log(southMovieList.length)
// }
// else if(query === 'Bhojpuri Movie')
// {
//   console.log(bhojpurMovieList.length)
// }
// else if(query === 'Bollywood Movie')
// {
//   console.log(bollywoodMovieList.length)
// }
// else if(query === 'Horror Movie')
// {
//   console.log(horrorMovieList.length)
// }
// else if(query === 'Commedy Movie')
// {
//   console.log(commedyMovieList.length)
// }
let slength = southMovieList.length
let blength = bhojpurMovieList.length
let bollylength = bollywoodMovieList.length
let hlength = horrorMovieList.length
let clength = commedyMovieList.length
if(slength !== 0 && blength !== 0 && bollylength !==0 && hlength !== 0 && clength !==0)
console.log('list is full')

    if(southMovieList.length !== 0 && bhojpurMovieList.length !== 0 && bollywoodMovieList.length !== 0 && horrorMovieList.length !== 0 && commedyMovieList.length !== 0) 
    {
      console.log(
        'going to post'
      )
      postData();
      
    }
    

  }
  
  useEffect( () => {
   fetchDataa('South Movie')
   fetchDataa('Bhojpuri Movie')
   fetchDataa('Bollywood Movie')
    fetchDataa('Horror Movie')
    fetchDataa('Commedy Movie')
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
    <h1 className=' text-2xl md:text-4xl font-bold relative'>Commedy Movies</h1>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={commedyMovieList }/>)
    }
    </div>
  );
}

export default App;
