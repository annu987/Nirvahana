
import React, { useEffect } from 'react';
import { Target, Users, Megaphone, Star, CheckCircle2, Mail, ArrowRight } from 'lucide-react';

const SponsorshipPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 relative">
      {/* Background Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block animate-pulse">PARTNERSHIP 2026</span>
          <h1 className="text-5xl md:text-8xl font-serif-cinematic font-black mb-8 leading-tight uppercase tracking-tighter">
            WHY SPONSOR <span className="text-yellow-500">US?</span>
          </h1>
          <div className="w-32 h-1.5 bg-yellow-500 mx-auto rounded-full mb-10"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* [ Visibility ] */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[2.5rem] flex flex-col group hover:border-yellow-500/40 transition-all duration-500">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-500">
                <Target size={32} className="text-yellow-500 group-hover:text-black transition-colors" />
              </div>
              <span className="text-yellow-500 text-[10px] font-black tracking-widest uppercase">[ Visibility ]</span>
            </div>
            <h3 className="text-2xl font-serif-cinematic font-black mb-8">Brand Visibility</h3>
            <ul className="space-y-4">
              <BenefitItem text="Direct exposure to a large student audience" />
              <BenefitItem text="Logo placement on event posters, banners & digital promotions" />
              <BenefitItem text="Brand mentions in event announcements and social media promotions" />
            </ul>
          </div>

          {/* [ Engagement ] */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[2.5rem] flex flex-col group hover:border-yellow-500/40 transition-all duration-500">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-500">
                <Users size={32} className="text-yellow-500 group-hover:text-black transition-colors" />
              </div>
              <span className="text-yellow-500 text-[10px] font-black tracking-widest uppercase">[ Engagement ]</span>
            </div>
            <h3 className="text-2xl font-serif-cinematic font-black mb-8">Engagement Opportunities</h3>
            <ul className="space-y-4">
              <BenefitItem text="On-site branding and promotional stalls" />
              <BenefitItem text="Opportunity to interact directly with participants and attendees" />
              <BenefitItem text="Product displays, sampling, or demos" />
              <BenefitItem text="Association with creative youth talent and filmmakers" />
            </ul>
          </div>

          {/* [ Reach ] */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-[2.5rem] flex flex-col group hover:border-yellow-500/40 transition-all duration-500">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-500">
                <Megaphone size={32} className="text-yellow-500 group-hover:text-black transition-colors" />
              </div>
              <span className="text-yellow-500 text-[10px] font-black tracking-widest uppercase">[ Reach ]</span>
            </div>
            <h3 className="text-2xl font-serif-cinematic font-black mb-8">Media & Promotion Reach</h3>
            <ul className="space-y-4">
              <BenefitItem text="Promotion through official event social platforms" />
              <BenefitItem text="Featured mentions during event sessions" />
              <BenefitItem text="Recognition during closing ceremony" />
              <BenefitItem text="Visibility in post-event highlights and coverage" />
            </ul>
          </div>
        </div>

        {/* Audience Advantage */}
        <div className="bg-zinc-900/60 border-2 border-yellow-500/20 rounded-[3rem] p-10 md:p-20 relative overflow-hidden group hover:border-yellow-500 transition-all duration-1000">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <Star size={200} className="text-yellow-500" />
          </div>
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-yellow-500 rounded-xl">
                <Star size={24} className="text-black fill-black" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif-cinematic font-black uppercase tracking-wider">Audience Advantage</h2>
            </div>
            <p className="text-zinc-100 text-xl md:text-3xl font-light leading-relaxed mb-10 italic">
              "Nirvahana Film Carnival brings together passionate students, aspiring filmmakers, and creative enthusiasts from diverse backgrounds."
            </p>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              The event provides sponsors with access to an energetic, highly engaged youth audience in a vibrant and creative environment, ensuring strong brand recall and meaningful outreach.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a 
            href="mailto:nirvahana@stpetershyd.com?subject=Sponsorship Proposal Inquiry - Nirvahana 2026"
            className="inline-flex items-center space-x-4 bg-yellow-500 hover:bg-white hover:text-black text-black px-12 py-6 rounded-2xl text-xs md:text-sm font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 shadow-yellow-500/20"
          >
            <Mail size={20} />
            <span>Connect for Partnership</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start space-x-3 group/item">
    <div className="mt-1 w-5 h-5 flex items-center justify-center bg-yellow-500/10 rounded-full group-hover/item:bg-yellow-500 transition-colors">
      <CheckCircle2 size={12} className="text-yellow-500 group-hover/item:text-black transition-colors" />
    </div>
    <span className="text-zinc-400 text-sm md:text-base leading-relaxed font-light group-hover/item:text-zinc-100 transition-colors">{text}</span>
  </li>
);

export default SponsorshipPage;
