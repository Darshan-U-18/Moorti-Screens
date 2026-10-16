import React from 'react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 subtle-grid opacity-20"></div>
      
      {/* Abstract background blobs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-navy-800 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gold/10 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8 mt-12 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs font-medium tracking-wider text-silver-200 uppercase">Moorti Screens • Design • Print • Finish</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="block text-lg sm:text-2xl font-semibold tracking-widest text-gold uppercase mb-3">
              Moorti Screens
            </span>
            Quality <span className="text-gradient">Printing.</span><br/>
            Professional <span className="text-gradient-gold">Results.</span>
          </h1>
          
          <p className="text-lg text-silver-400 max-w-xl leading-relaxed">
            {siteConfig.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp.replace(/\D/g, '')}&text=${encodeURIComponent(
                `*NEW PRINTING QUOTE INQUIRY - MOORTI SCREENS* 📋\n-----------------------------------------\n📦 I would like to request a quote for printing.\n\nPlease share your details:\n👤 Name:\n🏢 Company:\n📱 Phone:\n📦 Product needed:\n🔢 Quantity:\n📐 Size:\n⚙️ Printing Type:\n📝 Additional Requirements:\n-----------------------------------------`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 text-center text-sm sm:text-base font-bold rounded bg-white text-navy-900 hover:bg-silver-200 active:scale-95 transition-all flex items-center justify-center"
            >
              Get a Quote
            </a>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Moorti Screens, I would like to enquire about your printing services.')}`} target="_blank" rel="noreferrer" className="px-8 py-4 text-center text-sm sm:text-base font-bold rounded border border-white/20 text-white hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center">
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Authentic Screen Printing Workshop Visual */}
        <div className="relative h-[380px] lg:h-[500px] w-full hidden md:block">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src="/screen-printing-press.jpg"
              alt="Moorti Screens - Professional Screen Printing Press in Action"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
