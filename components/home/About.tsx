"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id='about' className='py-24 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        {/* Left: Animated Image Block */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='relative'>
          <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl'>
            <img
              src='prophetPicture2.jpg'
              alt='Leadership'
              className='w-full h-[500px] scale-120 '
            />
          </div>
          {/* Decorative Graphic Element */}
          <div className='absolute -bottom-6 -right-6 w-64 h-64 bg-blue-50 -z-0 rounded-full' />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}>
          <h2 className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-4'>
            Our Visionary Leader
          </h2>
          <h3 className='text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight'>
            Empowering the next generation of global change agents.
          </h3>
          <p className='text-lg text-stone-600 mb-8 leading-relaxed'>
            With over a decade of experience in leadership development and
            organizational transformation, we provide the strategic growth tools
            necessary for individuals and governments to thrive.
          </p>

          <div className='grid grid-cols-2 gap-8 border-t border-stone-100 pt-8'>
            <div>
              <p className='text-3xl font-bold text-stone-900'>10k+</p>
              <p className='text-stone-500 text-sm'>Leaders Trained</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-stone-900'>15+</p>
              <p className='text-stone-500 text-sm'>Global Partners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
