import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Movie  from '../Components/Movie'
import Spinner from '../Components/Spinner'
const CommedyMoviesPage = () => {
  const {loading,commedyMovieList} = useContext(AppContext)
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