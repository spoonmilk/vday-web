// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import PixelArtSection from '../components/PixelArtSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lorem Ipsum Cupid</title>
        <meta name="description" content="A retro-themed Valentine single-page website" />
        <link rel="icon" href="/favicon.ico" />
        {/* Import the retro font */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <div
        className="min-h-screen bg-pink-200 text-pink-900 p-8 text-center"
        style={{ fontFamily: "'Press Start 2P', cursive" }}
      >
        <Header />
        <PixelArtSection />
      </div>
    </>
  );
};

export default Home;
