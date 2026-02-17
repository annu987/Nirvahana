
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="register" className="py-20 md:py-32 bg-black px-6">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 md:mb-6 block">JOIN THE CARNIVAL</span>
        <h2 className="text-4xl md:text-8xl font-serif-cinematic font-black mb-12 md:mb-16 leading-tight md:leading-none">
          Apply for <br className="hidden md:block" /> Nirvahana '26
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 border border-yellow-500/20 rounded-2xl flex items-center justify-center shrink-0">
              <Calendar className="text-yellow-500" size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-serif-cinematic font-black text-white mb-2">Registration Open Soon</h4>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                We are currently preparing our official registration portal. Stay tuned for the launch of our <strong>Unstop</strong> registration links for all contests and workshops.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 border border-yellow-500/20 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="text-yellow-500" size={24} />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-serif-cinematic font-black text-white mb-2">Venue</h4>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                St Peter's Engineering College Campus, Hyderabad. Experience cinema in a tech-driven environment where creativity meets engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-[10px] md:text-sm italic">
            *Unstop registration links will be updated here as soon as they are live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
