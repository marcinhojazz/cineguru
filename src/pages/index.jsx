import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>CineGuru</title>

      </Head>
      <Header />
      <HomeComponent />
      <Footer />
    </>
  )
}
