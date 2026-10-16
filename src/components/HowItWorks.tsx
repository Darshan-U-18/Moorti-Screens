import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us What You Need",
      desc: "Share your product, quantity and requirements."
    },
    {
      num: "02",
      title: "Send Your Design",
      desc: "Send your artwork or discuss your design requirements."
    },
    {
      num: "03",
      title: "Get a Quote",
      desc: "Confirm specifications and pricing."
    },
    {
      num: "04",
      title: "We Print",
      desc: "Your approved order goes into production."
    }
  ];

  return (
    <section className="py-24 bg-navy-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 subtle-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">From Idea to <span className="text-gradient-gold">Finished Print</span></h2>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-navy-800 via-gold/30 to-navy-800"></div>
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:items-center md:text-center group">
                <div className="w-16 h-16 rounded-full bg-navy-900 border border-gold/30 flex items-center justify-center text-xl font-bold text-gold mb-6 relative z-10 group-hover:bg-gold group-hover:text-navy-900 transition-colors duration-300">
                  {step.num}
                </div>
                {/* Connecting Line (Mobile) */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-[-3rem] w-px bg-gold/20"></div>
                )}
                <div className="pl-24 md:pl-0">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-silver-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
