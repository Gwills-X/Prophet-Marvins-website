"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className='pt-40 pb-16 bg-stone-900 text-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-3xl'>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tighter mb-6'>
            Let’s build something{" "}
            <span className='text-blue-500'>meaningful.</span>
          </h1>
          <p className='text-xl text-stone-400 leading-relaxed'>
            Whether it's a speaking engagement, a strategic partnership, or
            joining the academy, we’d love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
