"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className='py-24'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20'>
        {/* Left: Contact Info */}
        <div className='space-y-12'>
          <div>
            <h3 className='text-2xl font-bold mb-8'>Contact Information</h3>
            <div className='space-y-6'>
              <div className='flex items-center gap-6'>
                <div className='w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-blue-600'>
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className='text-sm text-stone-400 font-medium uppercase tracking-widest'>
                    Email
                  </p>
                  <p className='text-lg font-semibold text-stone-900'>
                    hello@isiigenegba.com
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-6'>
                <div className='w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-blue-600'>
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <p className='text-sm text-stone-400 font-medium uppercase tracking-widest'>
                    Phone
                  </p>
                  <p className='text-lg font-semibold text-stone-900'>
                    +234 (0) 123 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-bold mb-6'>Follow the Journey</h3>
            <div className='flex gap-4'>
              {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href='#'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-12 h-12 rounded-xl bg-stone-900 text-white flex items-center justify-center hover:bg-blue-600 transition-colors'>
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='bg-stone-50 p-8 md:p-12 rounded-3xl border border-stone-100'>
          <form className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-sm font-bold text-stone-900 uppercase tracking-tight'>
                  Name
                </label>
                <input
                  type='text'
                  placeholder='John Doe'
                  className='w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-bold text-stone-900 uppercase tracking-tight'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='john@example.com'
                  className='w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-bold text-stone-900 uppercase tracking-tight'>
                Subject
              </label>
              <select className='w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all appearance-none'>
                <option>Academy Inquiry</option>
                <option>Speaking Engagement</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-bold text-stone-900 uppercase tracking-tight'>
                Message
              </label>
              <textarea
                rows={5}
                placeholder='How can we help?'
                className='w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-blue-600 transition-all resize-none'></textarea>
            </div>
            <button className='w-full py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-[0.98]'>
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
