import React from 'react';
import { Printer, Briefcase, Megaphone, CalendarDays, Badge } from 'lucide-react';
import { siteConfig } from '../config/site';

const categoryIcons: Record<string, React.ReactNode> = {
  printing: <Printer className="w-6 h-6 text-gold" />,
  business: <Briefcase className="w-6 h-6 text-gold" />,
  marketing: <Megaphone className="w-6 h-6 text-gold" />,
  event: <CalendarDays className="w-6 h-6 text-gold" />,
  finishing: <Badge className="w-6 h-6 text-gold" />,
};

const categoryTitles: Record<string, string> = {
  printing: "PRINTING",
  business: "BUSINESS PRINTING",
  marketing: "MARKETING MATERIALS",
  event: "EVENT & PERSONAL",
  finishing: "IDENTIFICATION & FINISHING",
};

const categoryDescriptions: Record<string, string> = {
  printing: "Core printing methodologies.",
  business: "Essential stationery for operations.",
  marketing: "Materials to grow your brand.",
  event: "Custom items for special occasions.",
  finishing: "Professional touches for final products.",
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-navy-800 relative">
      <div className="absolute inset-0 subtle-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What We <span className="text-gradient">Print</span></h2>
          <p className="text-silver-400">Complete printing solutions for business, events and everyday needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(siteConfig.services).map(([key, items]) => (
            <div key={key} className="glass-card p-8 rounded-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center mb-6">
                {categoryIcons[key]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{categoryTitles[key]}</h3>
              <p className="text-sm text-silver-400 mb-6">{categoryDescriptions[key]}</p>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-silver-400 mt-2 flex-shrink-0"></span>
                    <span className="text-silver-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
