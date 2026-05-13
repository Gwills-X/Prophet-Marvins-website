"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    title: "Innovating the Future",
    subtitle: "Strategic Leadership & Creative Excellence",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    title: "Empowering Growth",
    subtitle: "Tailored Solutions for Modern Industries",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='relative h-screen w-full overflow-hidden bg-black'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      <div className='relative z-10 flex h-full items-center justify-center text-center px-6'>
        <div className='max-w-4xl'>
          <motion.p
            key={`sub-${current}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-blue-400 font-medium tracking-widest uppercase mb-4'>
            {slides[current].subtitle}
          </motion.p>

          <motion.h1
            key={`title-${current}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-5xl md:text-7xl font-bold text-white leading-tight'>
            {slides[current].title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className='mt-10 flex gap-4 justify-center'>
            <button className='bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all'>
              Get Started
            </button>
            <button className='border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all'>
              Our Vision
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
