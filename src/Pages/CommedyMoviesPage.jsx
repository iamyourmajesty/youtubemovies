import React, { useContext , useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import Movie  from '../Components/Movie'
import Spinner from '../Components/Spinner'
import Paggination from '../Components/Paggination'
const CommedyMoviesPage = () => {
  const {loading,commedyMovieList,fetchDataa,setCurrentCategory} = useContext(AppContext)
 
  useEffect(() => {
    setCurrentCategory('Commedy Movie')
    fetchDataa('Commedy Movie')
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    window.scrollTo(0,0);
  },[commedyMovieList])

  
  return (
    <div>
      {
      loading ? (<Spinner/>)
      : (<Movie  videoIdList={commedyMovieList }/>)
    }
    <Paggination/>
    </div>
  )
}

export default CommedyMoviesPage