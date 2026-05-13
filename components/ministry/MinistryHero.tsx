"use client";
import { motion } from "framer-motion";

export default function MinistryHero() {
  return (
    <section className='relative h-[60vh] flex items-center justify-center bg-stone-900 text-white overflow-hidden'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 z-0 opacity-40 bg-cover bg-center'
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80')`,
        }}
      />

      <div className='relative z-10 text-center px-6'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='text-5xl md:text-7xl font-bold mb-4'>
          Ministry & Global Impact
        </motion.h1>
        <p className='text-xl text-stone-300 max-w-2xl mx-auto'>
          Advancing the Kingdom through empowerment, prayer, and strategic
          leadership.
        </p>
      </div>
    </section>
  );
}
