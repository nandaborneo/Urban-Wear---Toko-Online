import { motion } from 'motion/react';
import { testimonials } from '../../data';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6 md:px-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-headline font-extrabold text-5xl uppercase tracking-tighter mb-16 text-center text-white"
      >
        Suara Komunitas
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, i) => (
          <motion.div 
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-8 border-l-4 border-primary-fixed bg-surface-container-low shadow-xl"
          >
            <div className="flex gap-1 mb-4 text-primary-fixed">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-on-surface/80 italic mb-8 font-light leading-relaxed">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-on-primary-fixed font-bold">
                {testimonial.initial}
              </div>
              <span className="font-bold text-white uppercase tracking-widest text-xs">
                {testimonial.author}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
