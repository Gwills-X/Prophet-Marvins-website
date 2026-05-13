"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MinistryMandate() {
  return (
    <section className='py-24 bg-[#050505] text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col lg:flex-row gap-20 items-center'>
          {/* Left: Text Content */}
          <div className='flex-1 z-10'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className='text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-4'>
                The Apostolic Assignment
              </h2>
              <h3 className='text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8'>
                The Praetorium <br /> Church Global.
              </h3>
              <p className='text-lg text-gray-400 leading-relaxed mb-6'>
                A prophetic and apostolic movement commissioned to raise
                warriors, kings, and reformers who reveal the wisdom, glory, and
                power of God across diverse spheres of influence.
              </p>
              <p className='text-gray-500 leading-relaxed italic border-l-2 border-blue-600 pl-6 mb-8'>
                Born as an apostolic assignment through a dedicated evening
                service, we exist to disciple a people, awaken spiritual
                maturity, and equip believers to carry the government of God
                into every dimension of life.
              </p>

              <div className='grid grid-cols-2 gap-6 mt-10'>
                <div>
                  <h4 className='text-white font-bold text-xl mb-2'>
                    Sound Doctrine
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Building foundations through prophetic insight and prayer.
                  </p>
                </div>
                <div>
                  <h4 className='text-white font-bold text-xl mb-2'>
                    Dominion
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Shaping individuals into vessels of influence and
                    government.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: The Imagery */}
          {/* Picture needed: A high-quality shot of the Church Entrance or the Prophet on stage */}
          <div className='flex-1 relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className='relative w-full aspect-square'>
              <div className='absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden border border-white/10'>
                <Image
                  src='/ministry4.jpg'
                  alt='Apostolic Mandate'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden border-4 border-[#050505] shadow-2xl'>
                <Image
                  src='/ministry5.jpg'
                  alt='Prophetic Service'
                  fill
                  className='object-cover'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
