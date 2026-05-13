"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Mic2, Users } from "lucide-react";

const services = [
  {
    title: "The Academy",
    desc: "Professional courses for founders and legacy builders.",
    icon: <GraduationCap />,
  },
  {
    title: "Consulting",
    desc: "Tailored strategic solutions for your organization.",
    icon: <Briefcase />,
  },
  {
    title: "Speaking",
    desc: "Keynote sessions that spark transformation and change.",
    icon: <Mic2 />,
  },
  {
    title: "Ministry",
    desc: "Kingdom advancement and spiritual leadership.",
    icon: <Users />,
  },
];

export default function Services() {
  return (
    <section id='work' className='py-24 bg-stone-950 text-white'>
      <div className='max-w-7xl mx-auto px-6 text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold'>What We Offer</h2>
      </div>

      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className='p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-blue-500 transition-all cursor-pointer group'>
            <div className='text-blue-500 mb-6 group-hover:scale-110 transition-transform'>
              {s.icon}
            </div>
            <h4 className='text-xl font-bold mb-3'>{s.title}</h4>
            <p className='text-stone-400 text-sm leading-relaxed'>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
