"use client";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you fill out a contact form, enroll in the Academy, or sign up for our newsletter. This may include your name, email address, and any message content.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you about your inquiries, and to send you updates regarding the Academy or Ministry initiatives.",
    },
    {
      title: "3. Data Security",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      title: "4. Your Rights",
      content:
        "You have the right to request access to the personal data we hold about you, to request corrections, or to ask for the deletion of your data at any time by contacting us.",
    },
  ];

  return (
    <main className='pt-32 pb-20 bg-white min-h-screen'>
      <div className='max-w-4xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-stone-900 mb-4'>
            Privacy Policy
          </h1>
          <p className='text-stone-500 italic'>Last Updated: May 2026</p>
        </motion.div>

        <div className='space-y-12'>
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='prose prose-stone max-w-none'>
              <h2 className='text-2xl font-bold text-stone-800 mb-4'>
                {section.title}
              </h2>
              <p className='text-stone-600 leading-relaxed text-lg'>
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
