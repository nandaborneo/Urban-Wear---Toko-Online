import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../../data';

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="bg-surface py-24 px-6 md:px-16">
      <div className="flex justify-between items-end mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-fixed font-headline font-bold tracking-[0.2em] text-xs uppercase">Rilisan Terbaru</span>
          <h2 className="text-white font-headline font-extrabold text-5xl uppercase tracking-tighter">New Arrivals</h2>
        </motion.div>
        <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white border-b border-white pb-1 font-bold tracking-widest text-xs uppercase hover:text-primary-fixed hover:border-primary-fixed transition-colors" 
          href="#"
        >
          Lihat Semua
        </motion.a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link to="/product" className="block relative aspect-[3/4] bg-surface-container-low overflow-hidden img-hover-swap mb-6">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 img-front" 
                alt={product.name} 
                src={product.imgFront}
              />
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 img-back" 
                alt={`${product.name} back view`} 
                src={product.imgBack}
              />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                <button className="bg-white text-black flex-1 py-2 text-xs font-bold uppercase hover:bg-primary-fixed transition-colors">
                  Beli via WA
                </button>
              </div>
            </Link>
            <div className="flex justify-between items-start mb-2">
              <Link to="/product"><h3 className="text-white font-headline font-bold text-xl uppercase tracking-tight hover:text-primary-fixed transition-colors">{product.name}</h3></Link>
              <span className="text-primary-fixed font-bold">{product.price}</span>
            </div>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <button key={size} className="w-8 h-8 flex items-center justify-center border border-white/20 text-[10px] text-white hover:border-primary-fixed hover:text-primary-fixed transition-colors">
                  {size}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
