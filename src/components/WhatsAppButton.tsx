import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello Moorti Screens, I would like to enquire about your printing services.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-400 active:scale-95 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      <span className="absolute right-full mr-4 bg-navy-900 border border-white/10 text-white text-sm px-3 py-1.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap hidden md:block">
        Chat with us
      </span>
    </a>
  );
};
