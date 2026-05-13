"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const courses = [
  {
    title: "The Shift",
    desc: "Navigate major life transitions with confidence and strategic tools.",
    tag: "Personal Growth",
  },
  {
    title: "Awaken Purpose",
    desc: "Transform your aspirations into reality through structured guidance.",
    tag: "Visionary Leadership",
  },
  {
    title: "Legacy Builders",
    desc: "Exclusive course for founders and high-level legacy leaders.",
    tag: "Business Strategy",
  },
];

export default function CourseList() {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10'>
        {courses.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className='group p-8 rounded-3xl border border-stone-100 bg-white shadow-sm hover:shadow-2xl transition-all'>
            <span className='text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block'>
              {course.tag}
            </span>
            <h3 className='text-2xl font-bold mb-4'>{course.title}</h3>
            <p className='text-stone-500 mb-8 leading-relaxed'>{course.desc}</p>
            <button className='flex items-center gap-2 font-bold group-hover:text-blue-600 transition-colors'>
              Learn More <FaArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
