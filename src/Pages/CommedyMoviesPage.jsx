import React, { useContext , useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Movie  from '../Components/Movie'
import Spinner from '../Components/Spinner'
const CommedyMoviesPage = () => {
  const {loading,commedyMovieList} = useContext(AppContext)

  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={commedyMovieList }/>)
    }
    </div>
  )
}

export default CommedyMoviesPage