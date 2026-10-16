import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      num: "01",
      title: "Professional Finishing",
      desc: "Lamination, punching, binding and die cutting."
    },
    {
      num: "02",
      title: "Business Friendly",
      desc: "Printing solutions for businesses, organisations and individuals."
    },
    {
      num: "03",
      title: "One Place for Printing",
      desc: "Design, printing and finishing services under one roof."
    }
  ];

  return (
    <section className="py-24 bg-navy-800 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Why Moorti <span className="text-gradient">Screens?</span></h2>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="flex gap-6 items-start glass-card p-8 rounded-xl hover:bg-white/5 transition-colors w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1.5rem)]"
            >
              <div className="text-3xl font-light text-gold/50 font-mono select-none">{reason.num}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-silver-400 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
