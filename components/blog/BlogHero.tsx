"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogHero() {
  return (
    <section className='pt-32 pb-16 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='relative group cursor-pointer'>
          <div className='relative h-[60vh] w-full rounded-3xl overflow-hidden shadow-2xl'>
            <img
              src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80'
              alt='Featured Post'
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

            <div className='absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-3xl'>
              <span className='bg-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block'>
                Latest Insight
              </span>
              <h2 className='text-3xl md:text-5xl font-bold mb-4 tracking-tight'>
                Navigating the Shift: How to Lead in Times of Radical Transition
              </h2>
              <p className='text-stone-200 text-lg mb-6 line-clamp-2'>
                Discover the framework for maintaining clarity and purpose when
                everything around you is changing.
              </p>
              <button className='flex items-center gap-3 font-bold hover:text-blue-400 transition-colors'>
                Read Full Article <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
