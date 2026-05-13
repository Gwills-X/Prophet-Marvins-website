"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Executive Coaching",
    icon: <FaUsers className='text-blue-600' />,
    excerpt:
      "Transformation through wisdom, guiding leaders successfully through critical organizational transitions.",
    category: "Development",
    tags: ["Frame", "Refine"], // Referencing FORGE phases
  },
  {
    title: "Workforce Transformation",
    icon: <FaCogs className='text-blue-600' />,
    excerpt:
      "Aligning leadership, systems, and people to produce measurable growth and efficiency.",
    category: "Advisory",
    tags: ["Optimize", "Govern"],
  },
  {
    title: "Transition Advisory",
    icon: <FaChartLine className='text-blue-600' />,
    excerpt:
      "Helping organizations not just improve, but scale effectively through structured performance systems.",
    category: "Consulting",
    tags: ["Expand"],
  },
];

export default function ServiceGrid() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-16'>
          <h3 className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-4'>
            Service Architecture [cite: 14]
          </h3>
          <p className='text-3xl md:text-5xl font-black tracking-tighter max-w-2xl text-stone-900'>
            Building Systems that Drive Results. [cite: 3]
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='p-10 rounded-[2rem] bg-stone-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-stone-100 group'>
              <div className='text-4xl mb-8 group-hover:scale-110 transition-transform duration-500'>
                {service.icon}
              </div>
              <div className='space-y-4'>
                <div className='flex items-center gap-2'>
                  <span className='text-[10px] font-black uppercase text-blue-600 tracking-widest'>
                    {service.category} [cite: 15]
                  </span>
                </div>
                <h3 className='text-2xl font-bold text-stone-900'>
                  {service.title} [cite: 14]
                </h3>
                <p className='text-stone-500 text-sm leading-relaxed'>
                  {service.excerpt} [cite: 7, 11]
                </p>
                <div className='flex gap-2 pt-4'>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-[9px] px-3 py-1 bg-white border border-stone-200 rounded-full text-stone-400 font-bold uppercase tracking-tighter'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
