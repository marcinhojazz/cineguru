export async function getStaticPaths() {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  const movies = res.data.results
  const paths = movies.map((movie) => `/movie/${movie.id}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } }
}