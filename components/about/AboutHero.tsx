"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link"; // Next.js Link
import Image from "next/image"; // For better image optimization
import { FaPlay, FaChevronRight } from "react-icons/fa";

// Replace these strings with your actual image paths from your public folder or imports
const slides = [
  {
    image: "/photo_2026-05-13_12-41-16.jpg", // The "Visionary" Shot
    label: "The Spokesperson",
    title: "A Voice of \n Hope & Truth.",
    description:
      "Dedicated to spreading the message of faith and transformation to a global audience.",
  },
  {
    image: "/photo_2026-05-13_12-39-43.jpg", // The "Mentor" Shot
    label: "The Mentor",
    title: "Guiding the \n Next Generation.",
    description:
      "Empowering leaders through spiritual mentorship and strategic personal growth.",
  },
  {
    image: "/photo_2026-05-13_12-41-22.jpg", // The "Passion" Shot
    label: "The Minister",
    title: "Ministry \n with Purpose.",
    description:
      "Advocating for excellence and integrity in every sphere of influence.",
  },
];

export default function AboutHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Changed h-[95vh] to h-screen and added svh for mobile stability
    <section className='relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center'>
      {/* --- BACKGROUND SLIDES --- */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className='absolute inset-0'>
          <Image
            src={slides[current].image}
            alt={slides[current].label}
            fill
            priority
            className='object-cover object-top'
          />
        </motion.div>
      </AnimatePresence>

      {/* Deep Vignette for readability */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10' />

      {/* --- CONTENT CENTERED --- */}
      <div className='relative z-20 max-w-5xl mx-auto px-6 text-center mt-[-5vh]'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={`badge-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8'>
            <span className='text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]'>
              {slides[current].label}
            </span>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className='text-5xl md:text-6xl font-serif italic font-light text-white tracking-tight leading-[1.1] mb-8'>
            <span className='not-italic font-black block uppercase tracking-tighter'>
              {slides[current].title.split("\n")[0]}
            </span>
            {slides[current].title.split("\n")[1]}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light italic'>
            "{slides[current].description}"
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className='flex flex-col md:flex-row items-center justify-center gap-6'>
          <Link
            href='/about'
            className='bg-white text-black px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-2xl'>
            Read Our Story <FaChevronRight size={14} />
          </Link>

          <button className='flex items-center gap-3 text-white font-semibold hover:text-blue-500 transition-colors group'>
            <div className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 transition-all'>
              <FaPlay size={12} className='ml-1' />
            </div>
            Watch Latest Message
          </button>
        </motion.div>
      </div>

      {/* --- ANIMATED SCROLL LINE --- */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2'>
        <span className='text-[10px] text-gray-500 uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]'>
          Scroll
        </span>
        <motion.div
          animate={{ height: [0, 60, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className='w-[1px] bg-blue-500'
        />
      </div>
    </section>
  );
}
