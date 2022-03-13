import React, { useEffect } from 'react'

//components
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import {APIKey} from "../../common/apis/MovieApiKey"

const Home = () => {

   useEffect(() => {
     const movieText = "Harry"
     
     const fetchMovies = async () => {
       const response = await movieApi
       .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
       .catch((err) => {
         console.log("Err :" , err);
       })
       console.log("THE response from API" , response);
     }

     fetchMovies()
   } , [])

  return (
    <div>
      <div className="banner-img">

      </div>
      <MovieListing/>
    </div>
  )
}

export default Home