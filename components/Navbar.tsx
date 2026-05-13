"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Hide Navbar on Scroll Down, Show on Scroll Up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ministry", href: "/ministry" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Consulting", href: "/consulting" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className='fixed w-full z-50 top-0 left-0 bg-white/70 backdrop-blur-xl border-b border-stone-100'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Brand Identity */}
        <Link
          href='/'
          className='text-xl font-bold tracking-tighter text-stone-900 group'>
          PORTFOLIO
          <span className='text-blue-600 group-hover:pl-1 transition-all'>
            .
          </span>
        </Link>

        {/* Desktop Links with Premium Hover */}
        <div className='hidden md:flex space-x-1'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-stone-600 hover:text-stone-900"
                }`}>
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId='nav-underline'
                    className='absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 mx-4'
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className='hidden md:block'>
          <Link href='/contact'>
            <button className='bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all active:scale-95'>
              Work with me
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-stone-900'
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='absolute top-20 left-0 w-full bg-white border-b border-stone-100 px-6 py-10 shadow-xl md:hidden'>
          <div className='flex flex-col space-y-6 text-center'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-semibold ${
                  pathname === link.href ? "text-blue-600" : "text-stone-900"
                }`}
                onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
