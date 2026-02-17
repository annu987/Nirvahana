
import React from 'react';

const Atmosphere: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-black">
      {/* Parallax-style Crowd Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=1920" 
          alt="Crowded Cinema Experience" 
          className="w-full h-full object-cover brightness-75 contrast-125"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="w-24 h-px bg-yellow-500 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-7xl font-serif-cinematic font-black text-white uppercase tracking-widest mb-6 drop-shadow-2xl">
            Experience the <span className="text-yellow-500">Magic</span>
          </h2>
          <p className="text-zinc-300 text-sm md:text-lg font-light tracking-[0.3em] uppercase">The largest gathering of student creators in Hyderabad</p>
          <div className="w-24 h-px bg-yellow-500 mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
