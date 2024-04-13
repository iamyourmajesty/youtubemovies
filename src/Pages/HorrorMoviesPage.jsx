import React, { useContext,useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner'
import Movie from '../Components/Movie'
import Paggination from '../Components/Paggination'

const HorrorMoviesPage = () => {
  const {loading,horrorMovieList,fetchDataa,setCurrentCategory} = useContext(AppContext)
  useEffect(() => {
    setCurrentCategory('Horror Movie')
    fetchDataa('Horror Movie')
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    window.scrollTo(0,0);
  },[horrorMovieList])

  return (
    <div>
    {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={horrorMovieList}/>)
    }
    <Paggination/>
    </div>
  )
}

export default HorrorMoviesPage