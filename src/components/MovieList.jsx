/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MovieList = ({ movies }) => {
  return (
    <ul className="border w-full flex flex-wrap justify-center gap-4">
      {movies.map(movie => (
        <li key={movie.id} className='border flex flex-col border-[red] w-[200px]'>
          <Link href={`/movie/${movie.id}`}>
            {/* <Image
              width={250}
              height={250}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /> */}
            <img className='rounded' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h2 className='border flex flex-wrap w-full'>{movie.title}</h2>
            <p>Nota do usuário: {movie.vote_average}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList
