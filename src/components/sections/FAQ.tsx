import { motion } from 'motion/react';
import { faqs } from '../../data';

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white font-headline font-extrabold text-5xl uppercase tracking-tighter mb-16 text-center"
        >
          Pertanyaan
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface-container-low p-6 transition-all"
              open={i === 0}
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-headline font-bold text-xl uppercase text-white">{faq.question}</span>
                <span className="text-primary-fixed transition-transform group-open:rotate-180 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-4 text-white/60 font-light leading-relaxed">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
