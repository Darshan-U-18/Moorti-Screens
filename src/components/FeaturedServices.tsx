import React from 'react';

export const FeaturedServices: React.FC = () => {
  const features = [
    {
      title: "Screen Printing",
      desc: "High-quality, durable prints ideal for bulk orders and varied materials.",
      visual: (
        <div className="w-full h-32 relative flex items-center justify-center overflow-hidden rounded bg-navy-900 border border-white/5 group-hover:border-gold/30 transition-colors">
          <div className="absolute w-16 h-16 border-4 border-gold/40 rounded-sm transform rotate-12 transition-transform group-hover:rotate-45"></div>
          <div className="absolute w-16 h-16 border-4 border-silver-400/40 rounded-sm transform -rotate-12 transition-transform group-hover:-rotate-45"></div>
        </div>
      )
    },
    {
      title: "Offset Printing",
      desc: "Cost-effective solution for large volume commercial printing with crisp details.",
      visual: (
        <div className="w-full h-32 relative flex items-center justify-center overflow-hidden rounded bg-navy-900 border border-white/5 group-hover:border-gold/30 transition-colors">
           <div className="flex gap-2">
             <div className="w-6 h-16 rounded-full border-2 border-cyan-500/50"></div>
             <div className="w-6 h-16 rounded-full border-2 border-pink-500/50 -translate-y-2"></div>
             <div className="w-6 h-16 rounded-full border-2 border-yellow-500/50"></div>
           </div>
        </div>
      )
    },
    {
      title: "Multicolour Printing",
      desc: "Vibrant, full-colour reproduction for marketing and promotional materials.",
      visual: (
        <div className="w-full h-32 relative flex items-center justify-center overflow-hidden rounded bg-navy-900 border border-white/5 group-hover:border-gold/30 transition-colors">
          <div className="absolute w-20 h-20 bg-[conic-gradient(from_0deg,cyan,magenta,yellow,black,cyan)] opacity-30 rounded-full blur-md group-hover:blur-sm transition-all animate-[spin_10s_linear_infinite]"></div>
          <div className="relative w-12 h-12 bg-navy-900 rounded-full border border-white/10"></div>
        </div>
      )
    },
    {
      title: "Custom Printing",
      desc: "Tailored solutions including specialized finishing, die-cutting, and lamination.",
      visual: (
        <div className="w-full h-32 relative flex items-center justify-center overflow-hidden rounded bg-navy-900 border border-white/5 group-hover:border-gold/30 transition-colors">
           <div className="relative w-16 h-16 border border-silver-400/50 border-dashed rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-gold/20 rounded"></div>
           </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="group cursor-pointer">
              {feature.visual}
              <h3 className="text-xl font-bold text-white mt-6 mb-2">{feature.title}</h3>
              <p className="text-sm text-silver-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
