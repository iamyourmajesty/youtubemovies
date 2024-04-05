import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Components/Spinner'
import Movie from '../Components/Movie'

const SouthMoviePage = () => {
  const {loading,southMovieList} = useContext(AppContext)
  return (
    <div>
      {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={southMovieList }/>)
    }
    </div>
  )
}

export default SouthMoviePage