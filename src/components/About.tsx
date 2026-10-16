import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-navy-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Moorti <span className="text-gradient">Screens</span></h2>
            <div className="space-y-6 text-silver-400 text-lg leading-relaxed">
              <p>
                Moorti Screens provides designing, screen, offset and multicolour printing services for businesses, organisations and individuals.
              </p>
              <p>
                From everyday business stationery to promotional materials, invitations and custom printed products, we help turn designs into professionally finished printed materials.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {['Designing', 'Screen Printing', 'Offset Printing', 'Multicolour Printing'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  <span className="text-silver-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative">
              {/* Clean circular photo with crisp outline and zero lightening or glow */}
              <div className="w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold/40">
                <img
                  src={`${import.meta.env.BASE_URL}founder_avatar.png`}
                  alt="Moorti Screens Leadership and Master Printing Craftsmanship"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Minimal floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                <div className="glass-card px-5 py-2.5 rounded-full border border-white/10 shadow-lg flex items-center gap-3 backdrop-blur-md bg-navy-900">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Moorti Screens</p>
                    <p className="text-gold text-[10px] font-medium uppercase tracking-wider">Printing Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
