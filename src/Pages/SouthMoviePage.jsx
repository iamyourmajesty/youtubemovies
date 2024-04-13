import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner'
import Movie from '../Components/Movie'
import Paggination from '../Components/Paggination'

const SouthMoviePage = () => {
  const {loading,setCurrentCategory,southMovieList,bollywoodMovieList,bhojpurMovieList,horrorMovieList,commedyMovieList,fetchDataa} = useContext(AppContext)


  useEffect(() => {
    setCurrentCategory('South Movie')
    fetchDataa('South Movie')
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={southMovieList }/>)
    }
    <Paggination/>
    </div>
  )
}

export default SouthMoviePage