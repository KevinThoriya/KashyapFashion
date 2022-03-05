import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Home.module.css'
import ReactThemeProvider from '../src/components/ThemeProvider'
import Banner from '../src/components/Banner'
import ReadyToShip from '../src/components/ReadyToShip'
import Trending from '../src/components/Trending'
import Footer from '../src/components/Footer'
import { SnackbarProvider } from 'notistack'
import { ClosedCaptionRounded } from '@mui/icons-material'
import { UserContextProvider } from '../src/Hooks/userProvider'

export default function Home() {
  return (
    <>
      <div className={{}}>
        <Head>
          <title>Best sarees</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={{}}>
          <Navbar />
          <Banner />
          <ReadyToShip />
          <Trending />
          <ReadyToShip />
          <Trending />
          <ReadyToShip />
          <Trending />
          <ReadyToShip />
          <Trending />
        </main>
      </div>
      <Footer />
    </>
  )
}
