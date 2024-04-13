import React, { useContext,useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner'
import Movie from '../Components/Movie'
import Paggination from '../Components/Paggination'
const BollywoodMoviesPage = () => {
  const {loading,bollywoodMovieList,fetchDataa,setCurrentCategory} = useContext(AppContext)
  useEffect(() => {
    setCurrentCategory('Bollywood Movie')
    fetchDataa('Bollywood Movie')
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={bollywoodMovieList }/>)
    }
    <Paggination/>
    </div>
  )
}

export default BollywoodMoviesPage