
import React from 'react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-20 px-4">
      {/* Clean Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <div className="mb-8 inline-block animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          <span className="px-6 py-2 border border-yellow-500/30 text-yellow-500 text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-black rounded-full bg-yellow-500/5 backdrop-blur-sm">
            GRAND FEST 2026
          </span>
        </div>
        
        <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-serif-cinematic font-black mb-6 leading-[0.85] tracking-tighter uppercase animate-in fade-in slide-in-from-bottom duration-1000">
          <span className="text-white block drop-shadow-2xl">Nirvahana</span>
          <span className="text-yellow-500 block">Carnival</span>
        </h1>

        <p className="text-zinc-500 text-xs md:text-xl font-light tracking-[0.4em] uppercase mb-12 max-w-2xl mx-auto animate-in fade-in duration-1000 delay-300">
          A Home for Storytellers • SPEC Hyderabad
        </p>

        <div className="mb-16 animate-in fade-in zoom-in duration-1000 delay-500">
          <Countdown />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <a 
            href="#register"
            className="w-full sm:w-auto bg-yellow-500 text-black px-14 py-5 rounded-2xl text-[10px] md:text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(234,179,8,0.4)] hover:bg-white hover:scale-105 active:scale-95 text-center"
          >
            REGISTER YOUR FILM
          </a>
          <a 
            href="/sponsorship"
            className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-14 py-5 rounded-2xl text-[10px] md:text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-yellow-500/50 hover:scale-105 active:scale-95 text-center"
          >
            PARTNER WITH US
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
