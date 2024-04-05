import React, { useContext,useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner'
import Movie from '../Components/Movie'
const HorrorMoviesPage = () => {
  const {loading,horrorMovieList} = useContext(AppContext)
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={horrorMovieList}/>)
    }
    </div>
  )
}

export default HorrorMoviesPage