import { useState, useEffect } from 'react'
import axios from 'axios'
// import { API_KEY, API_URL } from '../utils/config'
import MovieList from './MovieList'

const API_KEY = '4732b436a8222872f11f101a99331a07'
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

const genres = [
  { id: 28, name: 'Ação' },
  { id: 12, name: 'Aventura' },
  { id: 16, name: 'Animação' },
  { id: 35, name: 'Comédia' },
  { id: 80, name: 'Crime' },
]

export default function HomeComponent() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get(`${API_URL}&query=${search}&with_genres=${selectedGenre}&primary_release_year=${selectedYear}&page=${currentPage}`)
      .then(response => setMovies(response.data.results))
  }, [search, selectedGenre, selectedYear, currentPage])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value)
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
  }

  return (
    <div className='border flex flex-col justify-center items-center gap-12 pt-12'>
      <div>
        <input
          type="search"
          placeholder="Pesquisar Filme"
          value={search}
          onChange={handleSearchChange}
        />
        <select onChange={handleGenreChange}>
          <option value="">Todos os gêneros</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Ano de lançamento"
          value={selectedYear}
          onChange={handleYearChange}
        />
      </div>
      <MovieList movies={movies} />
      <div className='py-6 flex flex-row justify-between lg:justify-center items-center lg:gap-60 border'>
        <button className='py-2 px-6 bg-slate-400' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Página anterior</button>
        <button className='py-2 px-6 bg-slate-400' onClick={() => setCurrentPage(currentPage + 1)}>Próxima página</button>
      </div>
    </div>
  )
}
