"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    label: "Strategic Transformation",
    title: "Aligning People, \n Systems, and Results.",
    description:
      "Forge Point is a premium advisory firm focused on producing measurable growth and sustainable organizational success.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    label: "Leadership Coaching",
    title: "Practical Wisdom \n for Global Leaders.",
    description:
      "Equipping leaders with transformation frameworks that produce measurable results across diverse cultural landscapes.",
  },
];

export default function ConsultingHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='relative w-full h-screen overflow-hidden bg-black flex items-center justify-center'>
      {/* Background Slideshow */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className='absolute inset-0'>
          <img
            src={slides[current].image}
            className='w-full h-full object-cover'
            alt=''
          />
        </motion.div>
      </AnimatePresence>

      <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10' />

      <div className='relative z-20 container mx-auto px-6 text-center'>
        <motion.span
          key={`label-${current}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='bg-blue-600 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block text-white'>
          {slides[current].label}
        </motion.span>

        <motion.h2
          key={`title-${current}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase'>
          {slides[current].title.split("\n")[0]} <br />
          <span className='text-blue-500'>
            {slides[current].title.split("\n")[1]}
          </span>
        </motion.h2>

        <motion.p
          key={`desc-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed'>
          {slides[current].description}
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
          <button className='w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all'>
            Start Transformation <FaArrowRight size={14} />
          </button>
          <a
            href='/Forge_Point_Premium.pdf'
            download
            className='w-full sm:w-auto border border-white/30 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all'>
            Download Full Model <FaDownload size={14} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2'>
        <motion.div
          animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className='w-[1px] bg-blue-500'
        />
      </div>
    </section>
  );
}
