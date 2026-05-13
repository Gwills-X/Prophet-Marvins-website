"use client";
import { motion } from "framer-motion";

const steps = [
  { phase: "Frame", desc: "Diagnose systems, leadership, and structure" },
  { phase: "Optimize", desc: "Redesign workflows and improve efficiency" },
  { phase: "Refine", desc: "Build leadership and accountability" },
  { phase: "Govern", desc: "Implement tracking and performance systems" },
  { phase: "Expand", desc: "Scale and replicate success" },
];

export default function ForgeRoadmap() {
  return (
    <section className='py-24 bg-[#080808] text-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4'>
            The Methodology
          </h2>
          <h3 className='text-4xl md:text-6xl font-black tracking-tighter uppercase'>
            The FORGE Model.
          </h3>
          <p className='text-gray-500 mt-6 max-w-xl mx-auto'>
            A structured framework designed to ensure organizations do not just
            improve, but scale effectively.
          </p>
        </div>

        <div className='relative'>
          {/* Horizontal line for desktop */}
          <div className='hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2' />

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className='relative z-10 group'>
                <div className='bg-[#111] border border-white/5 p-8 rounded-3xl group-hover:border-blue-500/50 transition-all duration-500 h-full'>
                  <span className='text-5xl font-black text-white/5 mb-6 block group-hover:text-blue-500/20 transition-colors'>
                    0{i + 1}
                  </span>
                  <h4 className='text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-500 transition-colors'>
                    {step.phase}
                  </h4>
                  <p className='text-gray-500 text-sm leading-relaxed'>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
