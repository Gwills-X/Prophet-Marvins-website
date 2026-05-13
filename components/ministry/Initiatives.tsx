"use client";
import { motion } from "framer-motion";

export default function Initiatives() {
  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row gap-16 items-center'>
          <div className='flex-1'>
            <h2 className='text-3xl font-bold mb-6'>Mantle of Deborah</h2>
            <p className='text-lg text-stone-600 leading-relaxed mb-8'>
              Empowering over 5,000 women across Africa, North America, and
              Europe through transformative conferences and strategic
              initiatives.
            </p>
            <div className='space-y-4'>
              {[
                "Global Prayer Rallies",
                "Leadership Retreats",
                "Kingdom Strategy",
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 text-stone-800 font-medium'>
                  <div className='w-2 h-2 bg-blue-600 rounded-full' />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-4'>
            <div className='h-64 bg-stone-200 rounded-2xl overflow-hidden shadow-lg'>
              <img
                src='https://images.unsplash.com/photo-1529070532901-ba8c300c1b79?auto=format&fit=crop&q=80'
                className='w-full h-full object-cover'
                alt='Ministry'
              />
            </div>
            <div className='h-64 bg-stone-200 rounded-2xl overflow-hidden shadow-lg mt-8'>
              <img
                src='https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80'
                className='w-full h-full object-cover'
                alt='Community'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
