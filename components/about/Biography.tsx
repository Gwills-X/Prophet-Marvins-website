"use client";
import { motion } from "framer-motion";

export default function Biography() {
  return (
    <section className='py-2 bg-stone-50 '>
      <div className='max-w-7xl h-auto mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center '>
        <div className='relative '>
          <div className='aspect-[5/5]  bg-stone-200 rounded-2xl overflow-hidden shadow-2xl'>
            {/* Replace with your actual image */}
            <img
              src='prophetProfile.jpg'
              className='w-full h-full '
              alt='About Profile'
            />
          </div>
          <div className='absolute  -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-10' />
        </div>

        <div className='space-y-8 '>
          <h3 className='text-4xl font-bold text-stone-900'>
            A Legacy of Service
          </h3>
          <div className='space-y-6 text-lg text-stone-600 leading-relaxed'>
            <p>
              Marvins Ogwuche is a prophetic voice and teacher dedicated to
              unveiling the wisdom, power, and glory of God. His ministry is
              defined by a deep foundation in prayer and spiritual intimacy,
              which fuels his passion for seeing believers established in their
              divine assignments.
            </p>
            <p>
              Over the years, this ministry has matured into a powerful
              prophetic expression defined by revelation, clarity, and sound
              doctrine. Through a multifaceted approach—spanning spoken word,
              written revelation, and immersive teaching sessions—the mission
              remains singular: to unveil the profound realities of the Kingdom.
            </p>
          </div>
          <div className='pt-6'>
            <button className='px-8 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-blue-600 transition-colors'>
              Download Full Bio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
