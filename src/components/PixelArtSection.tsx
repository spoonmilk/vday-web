'use client'


// components/PixelArtSection.tsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { poems }  from '../poems'

const PixelArtSection: React.FC = () => {

  // List of song paths (adjust the paths as needed)
  const songs = ["/socialism.mp3", "my-girl.mp3", "in-dreams.mp3"];

  // Ref for the audio element to control playback
  const audioRef = useRef<HTMLAudioElement>(null);

  // State to track the current song index for shuffling
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // State for controlling the poem modal and which poem to show
  const [showPoem, setShowPoem] = useState(false);
  const [poemIndex, setPoemIndex] = useState(0);

  // Function to handle the top pixel art image click for music shuffling
  const handleMusicShuffleClick = () => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
      audioRef.current.play().catch((err) =>
        console.error("Audio playback failed:", err)
      );
    }
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  // Function to handle the bottom pixel art image click for showing a poem
  const handlePoemClick = () => {
    const randomPoemIndex = Math.floor(Math.random() * poems.length);
    setPoemIndex(randomPoemIndex);
    setShowPoem(true);
  };

  return (
    <section className="my-8">
      <div className="flex flex-col space-y-8 items-center">
        {/* Top Pixel Art Image: Music Shuffle */}
        <div
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={handleMusicShuffleClick}
        >
          <img
            src="/cd-pixel.png"
            alt="Pixel Art Music Shuffle"
            className="max-w-xs"
          />
          <p className="mt-2 text-lg font-bold">Spin me some tunes, DJ!</p>
        </div>

        {/* Bottom Pixel Art Image: Show Poem */}
        <div
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={handlePoemClick}
        >
          <img
            src="/picnic-basket.png"
            alt="Pixel Art Poem"
            className="max-w-xs"
          />
          <p className="mt-2 text-lg font-bold">Pick some writing from the basket!</p>
        </div>
      </div>

      {/* Hidden audio element for playing songs */}
      <audio ref={audioRef} className="hidden" />

      {/* Poem Modal with Framer Motion Animation */}
      <AnimatePresence>
        {showPoem && (
          <motion.div
            key="overlay"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="modal"
              className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 text-pink-900"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <pre className="whitespace-pre-wrap max-h-[300px] overflow-y-auto mb-4 px-4 py-2 border border-pink-500 rounded-lg bg-pink-100">
                {poems[poemIndex]}</pre>
              <button
                onClick={() => setShowPoem(false)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PixelArtSection;
