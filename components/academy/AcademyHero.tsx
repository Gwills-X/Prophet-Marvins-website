"use client";
import { motion } from "framer-motion";

export default function AcademyHero() {
  return (
    <section className='bg-stone-900 py-32 text-center'>
      <div className='max-w-4xl mx-auto px-6'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl md:text-6xl font-bold text-white mb-6'>
          Academy of the Builders
        </motion.h1>
        <p className='text-xl text-stone-400'>
          Transform your vision into a strategic plan with our exclusive
          leadership courses.
        </p>
      </div>
    </section>
  );
}
