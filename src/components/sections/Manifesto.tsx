import { motion } from 'motion/react';

export function Manifesto() {
  return (
    <section className="bg-surface-container-lowest py-32 px-6 flex items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <h2 className="font-headline font-extrabold text-4xl md:text-7xl leading-tight tracking-tighter uppercase">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="block text-white"
          >
            Kami Tidak Mengikuti Tren.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="block text-white"
          >
            Kami Menciptakannya.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="block text-primary-fixed editorial-text-stroke mt-2"
            style={{ color: '#c1f400' }}
          >
            URBANWEAR.
          </motion.span>
        </h2>
      </motion.div>
    </section>
  );
}
