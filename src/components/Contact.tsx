import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-navy-800 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Print Something <span className="text-gradient">Great</span></h2>
        <p className="text-silver-400 max-w-2xl mx-auto mb-16 text-lg">
          Get in touch with us to discuss your printing requirements, request samples, or get a custom quote.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Details */}
          <div className="glass-card p-10 rounded-2xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-sm text-silver-400 text-center mb-8 max-w-[200px] leading-relaxed">
              Speak directly with our team for fast, friendly printing advice.
            </p>

            <div className="flex flex-col xl:flex-row gap-4 w-full mt-auto">
              <a href={`tel:${siteConfig.contact.phones[0].replace(/\s+/g, '')}`} className="flex-1 py-3 px-4 rounded bg-white text-navy-900 font-bold hover:bg-silver-200 active:scale-95 transition-all flex items-center justify-center text-center">
                Call Now
              </a>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello Moorti Screens`} target="_blank" rel="noreferrer" className="flex-1 py-3 px-4 rounded border border-white/20 text-white font-bold hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 text-center">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Email Details */}
          <div className="glass-card p-10 rounded-2xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-silver-200" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
            <div className="space-y-2 mb-8 flex flex-col items-center">
              {siteConfig.contact.emails.map((email, idx) => (
                <a key={idx} href={`mailto:${email}`} className="text-lg text-silver-200 hover:text-white transition-colors block">
                  {email}
                </a>
              ))}
            </div>
            <a href={`mailto:${siteConfig.contact.emails[0]}`} className="w-full py-3 px-4 rounded border border-white/20 text-white font-bold hover:bg-white/10 active:scale-95 transition-all mt-auto flex items-center justify-center text-center">
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
