import React from 'react';
import { Mail, Store, Info } from 'lucide-react';

const VendorPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-32 px-4 bg-black animate-in fade-in slide-in-from-bottom duration-700">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12 group">
            <div className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-amber-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                <Store className="w-12 h-12 text-amber-500 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif-cinematic mb-6 text-white transition-colors duration-500 group-hover:text-amber-50">
              Vendor Registration
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full transition-all duration-500 group-hover:w-32"></div>
        </div>

        {/* UPDATED GLOW BORDER BOX */}
        <div className="bg-zinc-900/40 border border-amber-500/40 rounded-[2.5rem] p-8 md:p-16 text-center backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] group">
            
            <p className="text-2xl md:text-4xl font-light text-zinc-100 mb-8 italic">
              Join the Nirvahana 2026 Vendor Collective.
            </p>

            <p className="text-zinc-500 mb-12 max-w-md mx-auto leading-relaxed text-sm md:text-base font-light group-hover:text-zinc-400 transition-colors">
              Nirvahana 2026 invites select food, beverage, merchandise, and art vendors to be part of a premium cinematic carnival experience at St. Peter’s Engineering College. Engage with thousands of students, creators, and guests in a vibrant festival environment designed for visibility, sales, and brand growth. Limited curated stalls with power, lighting, and prime footfall locations are available.
            </p>

            <a
              href="https://forms.gle/m6CiehSmZTgcXDgj7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-amber-600 hover:bg-white hover:text-black text-white px-12 py-6 rounded-2xl text-sm font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 shadow-amber-500/10 hover:shadow-white/20"
            >
              <Store size={20} />
              <span>Register as Vendor</span>
            </a>

            <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase mt-8 opacity-60">
              Click to open Nirvahana 2026 vendor application form
            </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard title="Footfall" text="Direct exposure to 3,000+ creative students and faculty." />
            <BenefitCard title="Experience" text="Be part of a high-energy cinematic atmosphere." />
            <BenefitCard title="Support" text="Access to premium stall locations with power & lighting." />
        </div>
      </div>
    </div>
  );
};

const BenefitCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
    <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl text-center transition-all duration-300 hover:bg-zinc-900/50 hover:translate-y-[-8px] hover:border-amber-500/40 hover:shadow-lg group">
        <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-4 transition-transform group-hover:scale-110">
          {title}
        </h4>
        <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
          {text}
        </p>
    </div>
);

export default VendorPage;
