"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-5xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='border-l-4 border-blue-600 pl-8 md:pl-12'>
          <h2 className='text-3xl md:text-4xl font-medium text-stone-800 leading-relaxed italic'>
            "To empower individuals and organizations to navigate transitions
            with clarity, purpose, and a commitment to creating lasting legacy."
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
