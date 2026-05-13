"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaCross, FaGlobe, FaHandsHelping } from "react-icons/fa";

const slides = [
  {
    image: "/ministry1.jpeg",
    icon: <FaCross />,
    label: "Evangelical Outreach",
    title: "Advancing the \n Kingdom.",
    description:
      "Taking the message of the cross to every corner of the earth through power and prayer.",
  },
  {
    image: "/ministry2.jpeg",
    icon: <FaGlobe />,
    label: "Global Influence",
    title: "Transforming \n Generations.",
    description:
      "Creating a global impact through strategic leadership and spiritual empowerment.",
  },
  {
    image: "/ministry3.jpg",
    icon: <FaHandsHelping />,
    label: "Community Impact",
    title: "Empowering the \n Believer.",
    description:
      "Equipping the saints with the tools and truth needed to dominate in their spheres of influence.",
  },
];

export default function MinistryHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Added h-screen to ensure it takes exactly the full window height with 0 margin
    <section className='relative w-full h-screen -mt-[80px] overflow-hidden bg-black flex items-center justify-center pt-10'>
      {/* --- BACKGROUND --- */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={`ministry-bg-${current}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className='absolute inset-0'>
          <Image
            src={slides[current].image}
            alt={slides[current].label}
            fill
            priority
            // Changed object-top to object-center to focus on the center of the photo
            className='object-cover object-center'
          />
        </motion.div>
      </AnimatePresence>

      {/* Adjusted gradient for a cleaner look */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-10' />

      {/* --- CONTENT CONTAINER --- */}
      <div className='relative z-20 container mx-auto px-6 text-center'>
        {/* Ministry Badge */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={`m-badge-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/20 bg-white/5 backdrop-blur-md mb-6'>
            <span className='text-blue-500 text-sm'>
              {slides[current].icon}
            </span>
            <span className='text-white text-[10px] font-black uppercase tracking-[0.3em]'>
              {slides[current].label}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* --- RESPONSIVE HEADING --- */}
        <AnimatePresence mode='wait'>
          <motion.h1
            key={`m-title-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-6'>
            <span className='text-blue-500'>
              {slides[current].title.split("\n")[0]}
            </span>
            <br />
            <span className='block'>
              {slides[current].title.split("\n")[1]}
            </span>
          </motion.h1>
        </AnimatePresence>

        {/* Subtext */}
        <AnimatePresence mode='wait'>
          <motion.p
            key={`m-desc-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10'>
            {slides[current].description}
          </motion.p>
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <button className='w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all'>
            Partner with Us
          </button>
          <button className='w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all'>
            Learn More
          </button>
        </motion.div>
      </div>

      {/* --- PROGRESS INDICATOR --- */}
      <div className='absolute bottom-10 right-10 flex flex-col gap-2 z-30 hidden md:flex'>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-1 transition-all duration-500 rounded-full ${
              current === index ? "h-8 bg-blue-500" : "h-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
