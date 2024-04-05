import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner'
import Movie from '../Components/Movie'
const BhojpuriMoviesPage = () => {
  const {loading,bhojpurMovieList} = useContext(AppContext)
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={bhojpurMovieList }/>)
    }
    </div>
  )
}

export default BhojpuriMoviesPage