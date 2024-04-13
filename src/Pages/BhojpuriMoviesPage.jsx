import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner'
import Movie from '../Components/Movie'
import Paggination from '../Components/Paggination'


const BhojpuriMoviesPage = () => {
  const {loading,bhojpurMovieList,fetchDataa,setCurrentCategory} = useContext(AppContext)
  useEffect(() => {
    setCurrentCategory('Bhojpuri Movie')
    fetchDataa('Bhojpuri Movie')
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    window.scrollTo(0,0);
  },[bhojpurMovieList])

  return (
    <div>
      {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={bhojpurMovieList }/>)
    }
    <Paggination/>
    </div>
  )
}

export default BhojpuriMoviesPage