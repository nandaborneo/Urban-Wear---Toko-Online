import { Link } from 'react-router-dom';

export function Checkout() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-primary italic leading-none">
          CHECKOUT<span className="text-primary-fixed">.</span>
        </h1>
        <p className="font-body uppercase tracking-[0.2em] text-[11px] text-white/40 mt-4">PUSAT LOGISTIK RAW METROPOLIS / EDITORIAL JAKARTA</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Information */}
        <div className="lg:col-span-7 space-y-16">
          {/* Shipping Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary-fixed font-black text-xl">01</span>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight">Informasi Pengiriman</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="col-span-2 relative">
                <label className="font-body uppercase tracking-[0.1em] text-[10px] text-white/50 block mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Masukkan nama penerima"
                  className="w-full bg-transparent border-b-2 border-outline-variant py-3 text-white placeholder:text-white/20 focus:border-primary-fixed transition-colors focus:outline-none focus:ring-0"
                />
              </div>
              <div className="col-span-2 relative">
                <label className="font-body uppercase tracking-[0.1em] text-[10px] text-white/50 block mb-2">Alamat Pengiriman</label>
                <input
                  type="text"
                  placeholder="Nama jalan, gedung, atau nomor unit"
                  className="w-full bg-transparent border-b-2 border-outline-variant py-3 text-white placeholder:text-white/20 focus:border-primary-fixed transition-colors focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative">
                <label className="font-body uppercase tracking-[0.1em] text-[10px] text-white/50 block mb-2">Kota</label>
                <input
                  type="text"
                  placeholder="Jakarta"
                  className="w-full bg-transparent border-b-2 border-outline-variant py-3 text-white placeholder:text-white/20 focus:border-primary-fixed transition-colors focus:outline-none focus:ring-0"
                />
              </div>
              <div className="relative">
                <label className="font-body uppercase tracking-[0.1em] text-[10px] text-white/50 block mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  placeholder="+62"
                  className="w-full bg-transparent border-b-2 border-outline-variant py-3 text-white placeholder:text-white/20 focus:border-primary-fixed transition-colors focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          </section>

          {/* Payment Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary-fixed font-black text-xl">02</span>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight">Metode Pembayaran</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="cursor-pointer group">
                <input type="radio" name="payment" className="hidden peer" defaultChecked />
                <div className="p-6 border border-white/10 bg-surface-container-low peer-checked:border-primary-fixed peer-checked:bg-primary-fixed/5 transition-all h-full">
                  <span className="material-symbols-outlined text-white/40 group-hover:text-primary-fixed transition-colors mb-4 block" data-icon="account_balance">account_balance</span>
                  <p className="font-headline font-bold text-sm tracking-widest uppercase">Virtual Account</p>
                  <p className="text-[10px] text-white/40 mt-1 uppercase">Verifikasi instan</p>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="payment" className="hidden peer" />
                <div className="p-6 border border-white/10 bg-surface-container-low peer-checked:border-primary-fixed peer-checked:bg-primary-fixed/5 transition-all h-full">
                  <span className="material-symbols-outlined text-white/40 group-hover:text-primary-fixed transition-colors mb-4 block" data-icon="account_balance_wallet">account_balance_wallet</span>
                  <p className="font-headline font-bold text-sm tracking-widest uppercase">E-Wallet</p>
                  <p className="text-[10px] text-white/40 mt-1 uppercase">GOPAY / OVO / DANA</p>
                </div>
              </label>
              <label className="cursor-pointer group">
                <input type="radio" name="payment" className="hidden peer" />
                <div className="p-6 border border-white/10 bg-surface-container-low peer-checked:border-primary-fixed peer-checked:bg-primary-fixed/5 transition-all h-full">
                  <span className="material-symbols-outlined text-white/40 group-hover:text-primary-fixed transition-colors mb-4 block" data-icon="credit_card">credit_card</span>
                  <p className="font-headline font-bold text-sm tracking-widest uppercase">Kartu Kredit</p>
                  <p className="text-[10px] text-white/40 mt-1 uppercase">Visa / Mastercard</p>
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest p-8 md:p-10 sticky top-32 border border-white/5">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-tight mb-8">Ringkasan Pesanan</h2>

            {/* Product Item */}
            <div className="flex gap-6 mb-10 pb-10 border-b border-white/5">
              <div className="w-24 h-32 bg-surface-container-high overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-500"
                  alt="Technical urban streetwear hoodie with minimalist aesthetic on a clean architectural background, sharp shadows and high contrast"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY4pHrg_gPSfCJol9sodLUBpaXAkFOAv42cy6Hp5B5A8LhQY32gnjA_NRHNFbQagyeYW6K8WY7mg94V2oBYIB3yuq4MSI7To7jOaxvTQxhLsl1ILE-nbWRfhbJpkBYoveTFv_MG-vtmFgH99hvxN3N4VV6GEWrdjdNsQY-abfvCbQco45qUEG2oF6uy-zc5rUzMn580kZfAqMF-xmHgzdlwy2cIWMp8g2NGwc1ii_Pv5E3BNSZAcYdeFF9HTEAocJ8RKzlrq5BhgYS"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-headline font-bold text-lg uppercase leading-tight">Ghost Shell Hoodie</h3>
                  <p className="text-[10px] font-body uppercase tracking-widest text-white/40 mt-1">Ukuran: Large / Onyx Black</p>
                </div>
                <p className="font-headline font-bold text-primary-fixed">Rp 499.000</p>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-4 mb-10">
              <div className="flex justify-between font-body text-xs uppercase tracking-widest text-white/50">
                <span>Subtotal</span>
                <span>Rp 499.000</span>
              </div>
              <div className="flex justify-between font-body text-xs uppercase tracking-widest text-white/50">
                <span>Pengiriman</span>
                <span>Rp 65.000</span>
              </div>
              <div className="flex justify-between font-body text-xs uppercase tracking-widest text-white/20 line-through">
                <span>Pajak</span>
                <span>Termasuk</span>
              </div>
            </div>

            {/* Total */}
            <div className="pt-8 border-t border-white/10 mb-10">
              <div className="flex justify-between items-end">
                <span className="font-body uppercase tracking-widest text-[10px] text-white/40">Total Jumlah</span>
                <span className="font-headline font-black text-4xl text-primary">Rp 564.000</span>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-5 bg-primary-fixed text-on-primary-fixed font-headline font-black text-xl uppercase tracking-tighter hover:bg-white hover:text-primary-fixed transition-all duration-300 active:scale-[0.98]">
              SELESAIKAN PESANAN
            </button>

            <div className="mt-8 flex items-center justify-center gap-2 opacity-30">
              <span className="material-symbols-outlined text-[14px]" data-icon="lock">lock</span>
              <p className="text-[9px] font-body uppercase tracking-widest">Transaksi aman terenkripsi 256-bit</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
