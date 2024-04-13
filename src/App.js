import {  useContext, useEffect, useState } from 'react';
import './App.css';
import {Route, Routes, useLocation,  useSearchParams } from 'react-router-dom';
import SouthMoviePage from './Pages/SouthMoviePage'
import BollyWoodMoviePage from './Pages/BollywoodMoviesPage'
import BhojpuriMoviePage from './Pages/BhojpuriMoviesPage'
import CommedyMoviePage from './Pages/CommedyMoviesPage'
import HorrorMoviePage from './Pages/HorrorMoviesPage'
import { AppContext } from './Context/AppContext';
import Navbar from './Components/Navbar';

const API_KEY = process.env.REACT_APP_API_KEY;
function App() {

  const {loading,southMovieList,bollywoodMovieList,bhojpurMovieList,horrorMovieList,commedyMovieList,fetchDataa} = useContext(AppContext)

  // const [searchParams,setSearchParams] = useSearchParams();
  // const location = useLocation();

  // useEffect(() => {
  //   const page = searchParams.get('page') ?? 1
  //   if(location.pathname.includes('tags'))
  //   {
  //     const tag = location.pathname.split('/').at(-1).replaceAll('-',' ')
  //     fetchDataa(Number(page),tag)
  //   }
  //   else if(location.pathname.includes('categories'))
  //   {
  //     const category = location.pathname.split('/').at(-1).replaceAll('-',' ')
  //     fetchDataa(Number(page),category)
  //   }
  //   else{
  //     fetchDataa('South Movie')
  //   }
  // },[location.pathname,location.search])


  
  
  // useEffect( () => {
  //  fetchDataa('South Movie')
  //  fetchDataa('Bhojpuri Movie')
  //  fetchDataa('Bollywood Movie')
  //   fetchDataa('Horror Movie')
  //   fetchDataa('Commedy Movie')
  // },[])

  return (
    <div className="App">

    <div className=' sticky -top-1 z-20 p-1 bg-white'> <Navbar/> </div>


    <Routes>
    <Route path='/' element={<SouthMoviePage/>}/>
    <Route path='/south' element={<SouthMoviePage/>}/>
    <Route path='/bollywood' element={<BollyWoodMoviePage/>}/>
    <Route path='/horror' element={<HorrorMoviePage/>}/>
    <Route path='/commedy' element={<CommedyMoviePage/>}/>
    <Route path='/bhojpuri' element={<BhojpuriMoviePage/>}/>
    </Routes>
    </div>
  );
}

export default App;


{
  // <h1 className=' m-5 text-2xl md:text-4xl font-bold relative'>South Movies</h1>
  //   {
  //     loading ? (<Spinner/>)
  //     : (<Movie  videoIdList={southMovieList }/>)
  //   }
  //   <h1 className=' m-5 text-2xl md:text-4xl font-bold relative'>Bollywood Movies</h1>
  //   {
  //     loading ? (<Spinner/>)
  //     : (<Movie  videoIdList={bollywoodMovieList }/>)
  //   }
  //   <h1 className=' m-5 text-2xl md:text-4xl font-bold relative'>Bhojpuri Movies</h1>
  //   {
  //     loading ? (<Spinner/>)
  //     : (<Movie  videoIdList={bhojpurMovieList }/>)
  //   }
  //   <h1 className=' m-5 text-2xl md:text-4xl font-bold relative'>Horror Movies</h1>
  //   {
  //     loading ? (<Spinner/>)
  //     : (<Movie  videoIdList={horrorMovieList }/>)
  //   }
  //   <h1 className=' m-5 text-2xl md:text-4xl font-bold relative'>Commedy Movies</h1>
  //   {
  //     loading ? (<Spinner/>)
  //     : (<Movie  videoIdList={commedyMovieList }/>)
  //   }
}