"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id='contact' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='bg-stone-900 rounded-3xl p-12 md:p-20 relative overflow-hidden'>
          {/* Background Graphic Decoration */}
          <div className='absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -mr-20 -mt-20' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Ready to transform your vision into reality?
              </h2>
              <p className='text-stone-400 text-lg mb-8'>
                Whether you're seeking expert guidance in leadership, coaching,
                or consulting, we are here to help you make a lasting impact.
              </p>
              <div className='flex flex-wrap gap-4'>
                <button className='bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all group'>
                  Get in Touch{" "}
                  <ArrowRight className='group-hover:translate-x-1 transition-transform' />
                </button>
                <div className='flex items-center gap-3 text-white px-6'>
                  <Mail className='text-blue-500' />
                  <span className='font-medium'>hello@yourdomain.com</span>
                </div>
              </div>
            </motion.div>

            {/* A subtle graphic or image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className='hidden lg:block h-64 bg-stone-800 rounded-2xl border border-stone-700'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
