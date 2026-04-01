import { Link } from 'react-router-dom';

export function ProductDetail() {
  return (
    <main className="pt-20">
      {/* Product Detail Section */}
      <section className="max-w-[1440px] mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Image Gallery (Editorial Scroller Style) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative group aspect-[4/5] overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="high fashion streetwear model wearing a minimalist black oversized techwear hoodie in a brutalist concrete urban setting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMeQNOyjDNw-vmpw-pXWC-FBVym8qheLmmp2sgCZDpzkwZxd2hPLsh9C5hv2RaQ0XgUtx5SwyXXCoOpYhe5rgo9XBabW7dQ_lPyC1r20U_OUX3_Kx3d_3Oe868W8O3Ld2v08ZOqOWLTwkmfKYyNR8-Gc6CiTEqo99Ls6lHyOJf8sASv4PnjTZBNaGk0z2kPH4JuLnpbC6vEK67aBRw041g_MPFe5B9AjO6v_UPSou4aIaey4CNGYR3schqVM1fftJI7A4tTnZhyg-e"
              />
              <div className="absolute top-6 left-6 mix-blend-difference">
                <span className="font-headline font-black text-6xl text-white opacity-20 uppercase tracking-tighter">GHOST</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-surface-container-low overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  alt="close up detail of heavy cotton fabric texture and high quality stitching on a black streetwear garment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1BkiU3fje8WalfM6lEq6exE0FxowyRvK2ESIR_zFTUg95t5TlogiE79acKztFLAxruGBBhjjqa_AF3GygL_ijBj1Ir4UPm0wZVFDKODNZ41Wg33jWiHiiAJ7LaJdVzUVzZRnyUkhLyRt04rlDxDMo6Nq4vvE68mWG8q0V3a7nK0SGGAuMYeCvOqhGgUat70j4Kmmu8UxhfKyYnUAJZdaw1hsxFUdwqno_sbPycELj_MvSQGRcwX9U-lS0DY_OPAU6gq5m__Fe-iOb"
                />
              </div>
              <div className="aspect-square bg-surface-container-low overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  alt="back view of a model in a black hoodie standing in front of neon jakarta city lights at night"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpePhx21-En-uYNvGgdP1Ggc6jQO6cKx61CRNTFB06Ut02Qxq27-B-W7ZIyMQ09Sv0jd1npK6KWV8iLHAQUiba4U6gINfHlW8fDdhUhX-EmDH0v7XevR3LdzfGzIFeWMBgLiCm_XJMNw0MUmu7UIWm2bnEYAGG5VXobysUgE89T9b_IRDg7dd0i2dH0aDtFyUdAla77xcRHFRz12Slaycu34nmJ4kQe7BcN3LYw9xW15LRA9DQFxdQQlYyqQh2SK9k8hWZg1SRZ0S2"
                />
              </div>
            </div>
          </div>
          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="mb-8">
              <span className="text-primary-fixed font-headline font-bold tracking-[0.2em] text-xs mb-4 block">URBANWEAR / KATALOG / FW24</span>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-white tracking-tighter uppercase mb-2">Ghost Shell Hoodie</h1>
              <p className="text-2xl font-headline font-light text-white/90">Rp 549.000</p>
            </div>
            <div className="space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-primary-fixed mb-3">Narasi</h3>
                <p className="text-white/60 font-body leading-relaxed text-sm max-w-md">
                  Dirancang untuk metropolis Jakarta. Ghost Shell dibuat dari katun fleece ultra-heavyweight 450GSM. Menampilkan siluet arsitektural terstruktur, bahu turun, dan tudung "Ghost" yang diperkuat untuk mempertahankan bentuknya. Tepi mentah, utilitas premium.
                </p>
              </div>
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">Pilih Ukuran</h3>
                  <button className="text-[10px] text-white/40 hover:text-primary-fixed transition-colors">PANDUAN UKURAN</button>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-4 border border-white/10 text-sm font-bold hover:border-primary-fixed hover:text-primary-fixed transition-all">S</button>
                  <button className="flex-1 py-4 border border-primary-fixed text-primary-fixed bg-primary-fixed/5 text-sm font-bold transition-all">M</button>
                  <button className="flex-1 py-4 border border-white/10 text-sm font-bold hover:border-primary-fixed hover:text-primary-fixed transition-all">L</button>
                  <button className="flex-1 py-4 border border-white/10 text-sm font-bold hover:border-primary-fixed hover:text-primary-fixed transition-all">XL</button>
                </div>
              </div>
              {/* CTA */}
              <div className="pt-4">
                <Link to="/checkout" className="w-full py-6 bg-primary-fixed text-on-primary-fixed font-headline font-black text-lg uppercase tracking-tighter hover:bg-white hover:text-primary-fixed transition-all duration-300 active:scale-95 flex justify-center items-center">
                  TAMBAH KE KERANJANG
                </Link>
                <div className="flex items-center justify-center gap-8 mt-6">
                  <button className="flex items-center gap-2 text-[10px] font-bold text-white/50 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm" data-icon="favorite">favorite</span> WISH LIST
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-bold text-white/50 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm" data-icon="share">share</span> BAGIKAN
                  </button>
                </div>
              </div>
              {/* Technical specs */}
              <div className="pt-12 border-t border-white/5">
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center text-xs font-black uppercase tracking-widest list-none">
                    Detail Teknis
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
                  </summary>
                  <div className="mt-4 text-xs text-white/50 space-y-2 leading-relaxed font-light">
                    <p>• 100% Premium Heavyweight Cotton (450GSM)</p>
                    <p>• Oversized Boxy Fit / Dropped Shoulder</p>
                    <p>• Hidden Side Seam Pockets</p>
                    <p>• Rilisan Eksklusif Editorial Jakarta</p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* You May Also Like Section (Editorial Grid) */}
      <section className="bg-surface-container-lowest py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter uppercase text-white">Mungkin Anda<br />Juga Suka</h2>
            <div className="h-[1px] flex-grow mx-8 bg-white/5 hidden md:block mb-4"></div>
            <a className="text-primary-fixed font-headline font-bold tracking-widest text-xs flex items-center gap-2" href="#">
              JELAJAHI KATALOG <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container mb-4 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt="black technical jogger pants with cargo pockets and straps on a model in a dark urban environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVyewbgM8vlirAcGSUCfDHs_36DfB9jQPfK2Y6q22yGFs50glHw1bVZcJCluMeFmE3YUfYVJVnvr7knYU9xxZUKCiANG8uQycx-VuD8-FTlk4GTmdwYk_GBLa6HQf27158yFuPSlDUohh3Dd4B-VsncDRfSSJh1lWJOXmcsquSWObdUCmg2rKBk-D5YIXuWn-ButCAJ9I98SevXn4ylC_sggXs-4AJX5y0oNzMdf1ZrEwyJlyhtTudCNgTplMd1gMpUTdHiW-51GTV"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-fixed text-on-primary-fixed text-[10px] font-black px-2 py-1 uppercase">RILISAN BARU</span>
                </div>
              </div>
              <h4 className="text-white font-headline font-bold uppercase tracking-tight">Signal Cargo Pants</h4>
              <p className="text-white/40 text-sm">Rp 699.000</p>
            </div>
            {/* Item 2 */}
            <div className="group md:mt-12">
              <div className="aspect-[3/4] bg-surface-container mb-4 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt="minimalist white oversized graphic tee with black typography worn by an urban male model"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_k709XcFOf0KHkD2co7O4VSsXnffxAMbd83ZzX--zSPR7vJkgt_M5Y-cgG_Qcd5spacRd-TALgWh-X1zg7cCUlJjzpr4nkPySP8Kxmf9_jEtzD2lgDf3b1CU0bPj45rKft4x2LG0CEECts5D5Y8rEb9dzwGyPPVocgu90xTfQWfoXnp0_YAanPX-ZvpOZ_oeXmX8HG7VE5WId5y7cTKoRwOyOGpMOOLSK3bhojFwazEzIpb4MV4bYcYnfqJe3sHcyhq2Cef4kEWix"
                />
              </div>
              <h4 className="text-white font-headline font-bold uppercase tracking-tight">Metropolis Graphic Tee</h4>
              <p className="text-white/40 text-sm">Rp 299.000</p>
            </div>
            {/* Item 3 */}
            <div className="group">
              <div className="aspect-[3/4] bg-surface-container mb-4 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt="premium dark grey technical windbreaker jacket with reflective details in a night city street"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR4SaR-pnJkWf-cJYq-lU3AEieV_xp9cLKGxOjHYllLYc416zKJY9m8HRwFQ24C9D3YStcIcjvhibNVjZHlHPMcdXpMCYDle-3TMpWJsuW-TwaF_RPeYe6YT-r19_O__-VguxC873FM92Cg59ojERSLRVElA4TahRi-QZUIvDVsBNioHjnwuTlfSA4dzztsj1ddzMlI6RcAKH7TarfzX4IW7_a5vZZbRTcfwTeXrfm3QAHEC7SghptfTx-0XtwF_hDzV2enyJGuh18"
                />
              </div>
              <h4 className="text-white font-headline font-bold uppercase tracking-tight">Vortex Shell Jacket</h4>
              <p className="text-white/40 text-sm">Rp 849.000</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
