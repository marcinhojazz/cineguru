import Head from "next/head";
import Header from "../components/Header";
export default function About() {
  return (
    <>
      <Head>
        <title>CineGuru</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" /> */}
      </Head>
      <Header />
      <div>
        ABOUT PAGE
      </div>
    </>
  )
}
