"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

const items = [
  {
    icon: <Zap />,
    title: "Strategy",
    desc: "Driving innovation through precise planning.",
  },
  {
    icon: <Globe />,
    title: "Global Reach",
    desc: "Impactful solutions across four continents.",
  },
  {
    icon: <Shield />,
    title: "Integrity",
    desc: "Built on a foundation of trust and results.",
  },
];

export default function Features() {
  return (
    <section className='py-24 bg-stone-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className='p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-stone-100 group'>
              <div className='w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                {item.icon}
              </div>
              <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
              <p className='text-stone-500 leading-relaxed'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
