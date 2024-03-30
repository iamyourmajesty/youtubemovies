import { createContext, useState } from "react";
import axios from 'axios'

export const AppContext = createContext()

export default function AppContextProvider({children})
{

// Your API key
const API_KEY = process.env.REACT_APP_API_KEY;
const [videoList,setVideoList] = useState([])
const [videoIdList,setVideoIdList] = useState([])


    async function fetchData(query = 'SouthMovie')
    {
        // Make a request to the YouTube Data API to search for videos
await axios.get('https://www.googleapis.com/youtube/v3/search', {
  params: {
    key: API_KEY,
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
  setVideoIdList(videoIds)
  // Create an array of video URLs based on the video IDs
  const videoUrls = videoIds.map((videoId) => `https://www.youtube.com/watch?v=${videoId}`);
  setVideoList(videoUrls)

  return videoIds
  
  // Output the list of video URLs
//   console.log(videoUrls);
})
.catch((error) => {
  console.error('Error fetching videos:', error);
  return null
});

    }

    const value = {
        videoList,
        setVideoList,
        videoIdList,
        fetchData,
    }

    return <AppContext.Provider value={value} >
    {children}
    </AppContext.Provider>
}