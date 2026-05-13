"use client";
import { motion } from "framer-motion";

export default function TermsPage() {
  const rules = [
    {
      title: "Acceptance of Terms",
      desc: "By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
    },
    {
      title: "Intellectual Property",
      desc: "All content, including text, graphics, logos, and course materials, is the property of Isi Igenegba and is protected by copyright laws. You may not reproduce or distribute these materials without explicit permission.",
    },
    {
      title: "Disclaimer",
      desc: "The information provided on this site and through the Academy is for educational and transformational purposes only. We make no guarantees regarding specific results from using our strategies.",
    },
    {
      title: "Limitation of Liability",
      desc: "In no event shall we be liable for any damages arising out of the use or inability to use the materials on this website.",
    },
  ];

  return (
    <main className='pt-32 pb-20 bg-stone-50 min-h-screen'>
      <div className='max-w-4xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className='mb-16 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-stone-900 mb-4'>
            Terms of Service
          </h1>
          <div className='w-20 h-1 bg-blue-600 mx-auto rounded-full' />
        </motion.div>

        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200'>
          <div className='space-y-10'>
            {rules.map((rule, i) => (
              <div
                key={i}
                className='border-b border-stone-100 pb-8 last:border-0 last:pb-0'>
                <h3 className='text-xl font-bold text-stone-900 mb-3'>
                  {rule.title}
                </h3>
                <p className='text-stone-600 leading-relaxed'>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
