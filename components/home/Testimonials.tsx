"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className='py-24 bg-black/95 text-white'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <p className='text-6xl font-serif mb-8 opacity-30'>"</p>
          <h3 className='text-2xl md:text-3xl font-medium italic leading-relaxed mb-8'>
            "I have seen her do the impossible in her visionary leadership
            efforts. Her ability to bring simplified insights to our lives is
            truly unmatched."
          </h3>
          <div className='flex flex-col items-center'>
            <div className='w-16 h-16 rounded-full bg-blue-400 mb-4 overflow-hidden border-2 border-white'>
              {/* Replace with actual image */}
              <div className='w-full h-full bg-stone-300' />
            </div>
            <p className='font-bold text-xl uppercase tracking-widest'>
              TY Bello
            </p>
            <p className='text-blue-200 text-sm'>
              Premier Photographer & Friend
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
