import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { socialProofImages } from '../../data';

export function SocialProof() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section id="koleksi" ref={ref} className="bg-surface-container-lowest py-24 overflow-hidden">
      <div className="px-6 mb-16">
        <motion.h2 
          style={{ x }}
          className="text-white font-headline font-extrabold text-7xl md:text-9xl uppercase tracking-tighter editorial-text-stroke leading-[0.8] whitespace-nowrap"
        >
          DIAKUI JALANAN DIAKUI JALANAN
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1">
        {socialProofImages.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="relative aspect-square overflow-hidden group"
          >
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              alt={item.handle} 
              src={item.src}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transform">
              <span className="text-primary-fixed font-headline font-bold text-2xl">{item.handle}</span>
              <p className="text-white text-sm">{item.quote}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
