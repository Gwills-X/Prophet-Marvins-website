"use client";
import { motion } from "framer-motion";
import {
  FaCrown,
  FaLightbulb,
  FaGlobeAfrica,
  FaMicrophoneAlt,
} from "react-icons/fa";

const missions = [
  {
    icon: <FaCrown />,
    title: "Kingdom Leadership",
    text: "Raising reformers to dominate systems, cities, and cultures.",
  },
  {
    icon: <FaLightbulb />,
    title: "Wisdom & Revelation",
    text: "Discipling nations through spiritual depth and apostolic foresight.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Global Stewardship",
    text: "Stewardship of a global move of God through ministry and media.",
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "Creative Culture",
    text: "Engaging the digital space and strategic transgenerational conversations.",
  },
];

export default function VisionNexus() {
  return (
    <section className='py-24 bg-white text-black'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-blue-600 font-black tracking-widest uppercase text-xs'>
            Phase II: The Expansion
          </motion.span>
          <h2 className='text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-6'>
            Confluence & Nexus.
          </h2>
          <p className='text-gray-600 text-lg'>
            The next phase of the mandate—a convergence point for leadership,
            creativity, culture, and spiritual awakening.
          </p>
        </div>

        {/* Mission Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {missions.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className='p-10 bg-gray-50 rounded-[2rem] hover:bg-blue-600 hover:text-white transition-all duration-500 group'>
              <div className='text-3xl mb-6 text-blue-600 group-hover:text-white transition-colors'>
                {m.icon}
              </div>
              <h3 className='text-2xl font-bold mb-4 tracking-tight'>
                {m.title}
              </h3>
              <p className='text-gray-500 group-hover:text-blue-100 transition-colors'>
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className='mt-20 p-12 bg-black rounded-[3rem] text-center text-white relative overflow-hidden'>
          <div className='relative z-10'>
            <h3 className='text-3xl font-bold mb-4 italic'>
              "More than a ministry — it is a call to alignment."
            </h3>
            <p className='text-gray-400 max-w-xl mx-auto'>
              Join a generation marked by purpose, power, and divine
              responsibility.
            </p>
          </div>
          {/* Background decoration */}
          <div className='absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]' />
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 blur-[100px]' />
        </motion.div>
      </div>
    </section>
  );
}
