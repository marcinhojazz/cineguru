import { useState, useEffect } from 'react'
import axios from 'axios'
// import { API_URL, API_KEY } from '../utils/config'

const API_KEY = 'MY_API'
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

function Filters({ filters, setFilters }) {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
      .then(response => setGenres(response.data.genres))
  }, [])

  return (
    <nav>
      <select onChange={e => setFilters({ ...filters, genre_ids: e.target.value })}>
        <option value="">Todos os gêneros</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>

      <input type="number" placeholder="Ano de lançamento" onChange={e => setFilters({ ...filters, release_date: e.target.value })} />

      <input type="number" placeholder="Nota do usuário" onChange={e => setFilters({ ...filters, vote_count: e.target.value })} />

      <input type="search" placeholder="Search" onChange={e => setFilters({ ...filters, title: e.target.value })} onKeyDown={e => e.keyCode === 13 && search()} />
    </nav>
  )
}

export default Filters
