import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-stone-50 pt-20 pb-10 border-t border-stone-200'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
          {/* Brand Info */}
          <div className='col-span-1 md:col-span-1'>
            <Link
              href='/'
              className='text-2xl font-bold tracking-tighter text-stone-900 mb-6 block'>
              PORTFOLIO<span className='text-blue-600'>.</span>
            </Link>
            <p className='text-stone-500 text-sm leading-relaxed'>
              Empowering global transformation through leadership, coaching, and
              strategic consulting.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className='font-bold mb-6'>Quick Links</h4>
            <ul className='space-y-4 text-sm text-stone-600'>
              <li>
                <Link
                  href='/about'
                  className='hover:text-blue-600 transition-colors'>
                  About Isi
                </Link>
              </li>
              <li>
                <Link
                  href='/schools'
                  className='hover:text-blue-600 transition-colors'>
                  Praetorium Academy of Generals
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='hover:text-blue-600 transition-colors'>
                  Latest Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='font-bold mb-6'>Services</h4>
            <ul className='space-y-4 text-sm text-stone-600'>
              <li>Consulting</li>
              <li>Speaking Engagements</li>
              <li>Ministry Partnerships</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className='font-bold mb-6'>Connect</h4>
            <div className='flex gap-4'>
              <a
                href='#'
                aria-label='Instagram'
                className='w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-pink-600 hover:text-white transition-all'>
                <FaInstagram size={18} />
              </a>
              <a
                href='#'
                aria-label='Twitter'
                className='w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-blue-400 hover:text-white transition-all'>
                <FaTwitter size={18} />
              </a>
              <a
                href='#'
                aria-label='LinkedIn'
                className='w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-blue-700 hover:text-white transition-all'>
                <FaLinkedinIn size={18} />
              </a>
              <a
                href='#'
                aria-label='Facebook'
                className='w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-blue-800 hover:text-white transition-all'>
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-stone-400 text-xs text-center'>
            © {new Date().getFullYear()} Portfolio Name. All Rights Reserved.
          </p>
          <div className='flex gap-6 text-xs text-stone-400'>
            <Link href='/privacy' className='hover:text-stone-600'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-stone-600'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
