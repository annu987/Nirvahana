
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sponsors: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-zinc-900/40 border border-zinc-800 p-12 md:p-20 rounded-3xl relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(234,179,8,0.1)]">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity duration-700 group-hover:scale-125 group-hover:rotate-12 transform pointer-events-none">
            <Mail size={160} className="text-yellow-500" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif-cinematic mb-6 text-white tracking-wide transition-colors duration-500 group-hover:text-amber-50">
            Partner With <br />
            <span className="text-yellow-500 group-hover:text-yellow-400 transition-colors">Nirvahana 2026</span>
          </h2>
          
          <p className="text-lg text-zinc-400 mb-10 font-light leading-relaxed max-w-lg mx-auto group-hover:text-zinc-300 transition-colors duration-500">
            Align your brand with the next generation of visual storytellers. Discover the impact of partnering with SPEC's premiere film festival.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/sponsorship"
              className="inline-flex items-center space-x-3 bg-yellow-500 hover:bg-white hover:text-black text-black px-10 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span>Why Sponsor Us?</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
