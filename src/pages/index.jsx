import Head from "next/head";
import HomePage from "../components/HomePage";
import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <>
      <Head>
        <title>CineGuru</title>
      </Head>
      <HomePage />
    </>
  )
}
