import React from 'react';
import poster from "/src/assets/NIRVAHANA-FILM-CARNIVAL.png";


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-black px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-32 items-center">
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <span className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-8 block">
            OUR MISSION
          </span>

          <h2 className="text-5xl md:text-8xl font-serif-cinematic font-black mb-10 leading-[0.9] text-white uppercase tracking-tighter">
            THE ART OF <br /> <span className="text-yellow-500">CINEMA</span>
          </h2>

          <div className="space-y-8 text-zinc-400 text-lg md:text-xl leading-relaxed font-light mb-14 italic">
            <p className="border-l-2 border-yellow-500/30 pl-6">
              "Nirvahana is more than a festival; it is a canvas for those who see the world through a lens."
            </p>

            <p className="text-zinc-500 text-base md:text-lg not-italic">
              Founded at St. Peter's Engineering College, the Nirvahana Film Carnival bridges the gap between technical expertise and creative expression. Join us for three days of immersive storytelling.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 py-10 border-t border-zinc-900">
            <div>
              <h5 className="text-yellow-500 text-[10px] font-black tracking-widest uppercase mb-3">
                3 GRAND DAYS
              </h5>
              <p className="text-zinc-600 text-xs leading-relaxed">
                A curated journey from Podcast deep-dives to red-carpet finales.
              </p>
            </div>

            <div className="border-l border-zinc-900 pl-10">
              <h5 className="text-yellow-500 text-[10px] font-black tracking-widest uppercase mb-3">
                HYDERABAD HUB
              </h5>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Bringing together the brightest creative minds in the city.
              </p>
            </div>
          </div>
        </div>

        {/* Poster Side */}
        <div className="w-full lg:w-1/2 relative group order-1 lg:order-2">
          <div className="absolute -inset-20 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-yellow-500/10 transition-all duration-1000"></div>

          <div className="relative z-10 flex items-center justify-center">
            
            <div className="relative aspect-[3/4.5] w-full max-w-[420px] overflow-hidden rounded-2xl shadow-2xl border border-zinc-900 group-hover:border-yellow-500/40 transition-all duration-700 bg-zinc-950">
              
              {/* ✅ YOUR POSTER IMAGE */}
              <img 
                src={poster}
                alt="Nirvahana Film Carnival"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
