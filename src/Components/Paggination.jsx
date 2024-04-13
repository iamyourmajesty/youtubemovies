import React,{ useContext} from 'react'
import Spinner from './Spinner'
import { AppContext } from '../Context/AppContext'

const Paggination = () => {
  const {loading,currentCategory,prevPageToken,nextPageToken,southMovieList,bollywoodMovieList,bhojpurMovieList,horrorMovieList,commedyMovieList,fetchDataa} = useContext(AppContext)

  function handlePrevButton()
  {
    if(prevPageToken)
    fetchDataa(currentCategory,prevPageToken)
  }

  function handleNextButton()
  {
    if(nextPageToken)
    fetchDataa(currentCategory,nextPageToken)
  }

  return (
    <div>
    {
  loading ? (<Spinner/>)
  : ( <div className=' my-4 gap-20 flex items-center justify-center'>
    <button className=' text-xl md:text-2xl text-[#22222295] cursor-pointer hover:bg-[#efdfdf] border shadow-md px-3 rounded ' onClick={handlePrevButton}>Prev</button>
    <button className=' text-xl md:text-2xl text-[#22222295] cursor-pointer hover:bg-[#efdfdf] border shadow-md px-3 rounded' onClick={handleNextButton}>Next</button>
    </div>
    )
}
   </div>
  )
}

export default Paggination

