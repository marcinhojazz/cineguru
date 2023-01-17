/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = '4732b436a8222872f11f101a99331a07'

const MoviePage = ({ id }) => {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error))
  }, [id])

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>
  )
}

export default MoviePage
