import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React from 'react';

export function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0A0A0A] fixed top-0 z-50 w-full flex justify-between items-center px-6 py-4 max-w-full"
    >
      <Link to="/" className="text-2xl font-black font-headline text-white tracking-widest">URBANWEAR</Link>
      <div className="hidden md:flex items-center space-x-8">
        <a onClick={(e) => handleScroll(e, 'new-arrivals')} className="text-white/70 hover:text-white transition-colors duration-300 font-body font-light cursor-pointer" href="#new-arrivals">New Arrivals</a>
        <a onClick={(e) => handleScroll(e, 'koleksi')} className="text-white/70 hover:text-white transition-colors duration-300 font-body font-light cursor-pointer" href="#koleksi">Koleksi</a>
        <a onClick={(e) => handleScroll(e, 'harga')} className="text-white/70 hover:text-white transition-colors duration-300 font-body font-light cursor-pointer" href="#harga">Harga</a>
        <a onClick={(e) => handleScroll(e, 'faq')} className="text-white/70 hover:text-white transition-colors duration-300 font-body font-light cursor-pointer" href="#faq">FAQ</a>
      </div>
      <button onClick={(e: any) => handleScroll(e, 'harga')} className="bg-primary-fixed text-on-primary-fixed px-6 py-2 font-bold uppercase tracking-tighter text-sm hover:bg-white transition-all duration-200 active:scale-95">
        Order Sekarang
      </button>
    </motion.nav>
  );
}
