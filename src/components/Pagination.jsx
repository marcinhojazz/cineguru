/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL, API_KEY } from '../utils/config'

function Pagination({ filters, setFilters, currentPage, setCurrentPage, setMovies }) {
  useEffect(() => {
    axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}&with_genres=${filters.genre_ids}&primary_release_year=${filters.release_date}&vote_average.gte=${filters.vote_count}`)
      .then(response => setMovies(response.data.results))
  }, [currentPage, filters])

  return (
    <div>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Página anterior</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Próxima página</button>
    </div>
  )
}

export default Pagination
