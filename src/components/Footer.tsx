import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <Logo className="mb-6" />
            <p className="text-silver-400 max-w-sm">
              {siteConfig.shortDescription}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-silver-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-silver-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-silver-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-silver-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#quote" className="text-gold hover:text-yellow-400 transition-colors">Get a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              {siteConfig.contact.phones.map((phone, idx) => (
                <li key={idx}><a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-silver-400 hover:text-white transition-colors">{phone}</a></li>
              ))}
              <li><a href={`mailto:${siteConfig.contact.emails[0]}`} className="text-silver-400 hover:text-white transition-colors">{siteConfig.contact.emails[0]}</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver-400 text-sm">
            © {siteConfig.year} Moorti Screens. All rights reserved.
          </p>
          <div className="text-sm text-silver-400/50">
            Professional Printing Services
          </div>
        </div>
      </div>
    </footer>
  );
};
