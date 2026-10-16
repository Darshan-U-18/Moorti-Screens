import React from 'react';

export const Trust: React.FC = () => {
  const features = [
    {
      num: "01",
      title: "Design Support",
      desc: "Prepare your artwork for professional printing."
    },
    {
      num: "02",
      title: "Quality Printing",
      desc: "Screen, offset and multicolour printing solutions."
    },
    {
      num: "03",
      title: "Professional Finishing",
      desc: "Lamination, binding, punching and die cutting."
    }
  ];

  return (
    <section className="py-24 bg-navy-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6">Printing Made <span className="text-gradient">Simple</span></h2>
            <p className="text-silver-400 leading-relaxed">
              From everyday business stationery to promotional materials, invitations and custom printed products, Moorti Screens helps turn your ideas into professionally finished print.
            </p>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.num} className="glass-card p-6 rounded-lg hover:border-gold/30 transition-colors group">
                <div className="text-sm font-bold text-gold mb-4 font-mono">{feature.num}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-silver-200 transition-colors">{feature.title}</h3>
                <p className="text-sm text-silver-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
