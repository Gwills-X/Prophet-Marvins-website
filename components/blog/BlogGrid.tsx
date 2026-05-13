"use client";
import { motion } from "framer-motion";

const posts = [
  {
    date: "May 10, 2026",
    title: "Building a Legacy Beyond Business",
    excerpt:
      "Success is temporary, but legacy is eternal. Here is how to build for the next generation.",
    category: "Leadership",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
  },
  {
    date: "April 28, 2026",
    title: "The Power of Strategic Silence",
    excerpt:
      "Why the most effective leaders know when to listen and when to speak.",
    category: "Coaching",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80",
  },
  {
    date: "April 15, 2026",
    title: "Spiritual Depth in a Digital Age",
    excerpt:
      "Maintaining your core values while navigating a fast-paced technology landscape.",
    category: "Ministry",
    image:
      "https://images.unsplash.com/photo-1454165833767-1390e4a2ae3b?auto=format&fit=crop&q=80",
  },
];

export default function BlogGrid() {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='group cursor-pointer'>
              <div className='aspect-video rounded-2xl overflow-hidden mb-6 bg-stone-100 shadow-sm'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-3 text-xs font-bold text-blue-600 uppercase'>
                  <span>{post.category}</span>
                  <span className='w-1 h-1 bg-stone-300 rounded-full' />
                  <span className='text-stone-400 font-medium'>
                    {post.date}
                  </span>
                </div>
                <h3 className='text-xl font-bold text-stone-900 group-hover:text-blue-600 transition-colors'>
                  {post.title}
                </h3>
                <p className='text-stone-500 text-sm leading-relaxed line-clamp-3'>
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
