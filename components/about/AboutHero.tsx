"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className='pt-40 pb-20 bg-stone-50 border-b border-stone-200'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block'>
          Our Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter'>
          Visionary Leadership. <br /> Global Impact.
        </motion.h1>
      </div>
    </section>
  );
}
