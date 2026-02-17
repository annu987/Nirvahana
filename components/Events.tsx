import React, { useState } from 'react';
import { Camera, Film, Users, Sparkles, Trophy, Mic, PenTool, X, Clock, Calendar, MapPin } from 'lucide-react';

const events = [
  {
    category: 'COMPETITION',
    title: 'Short Film Contest',
    shortDesc: 'The premier competition for student filmmakers. Submit your masterpieces and compete for the inaugural Golden Reel Trophy.',
    longDesc: 'Our flagship event invites student creators to showcase their narrative vision. Films must be 3-15 minutes. Entries will be judged on storytelling, technical execution, and originality by a panel of industry veterans.',
    details: [
      'Eligibility: Open to all college students nationwide.',
      'Theme: Open (No specific theme constraints).',
      'Prize Pool: Upto ₹30,000.',
      'Format: MP4/MOV, 1080p minimum.'
    ],
    icon: <Film className="text-yellow-500" />
  },
  {
    category: 'PANEL',
    title: 'Jury Panel & Reviews',
    shortDesc: 'Industry filmmakers and critics evaluate submissions and provide professional feedback to selected finalists.',
    longDesc: 'Gain invaluable insights from the best in the business. Our jury panel consists of award-winning directors, seasoned cinematographers, and veteran film critics who will rigorously evaluate the shortlisted films and provide constructive, professional critiques to the creators.',
    details: [
      'Selection Process: Top 20 films enter the final review.',
      'Panelists: Renowned personalities from Indie circles.',
      'Feedback: Detailed professional reviews for all finalists.',
      'Feature: Live interactive session with the jury members.'
    ],
    icon: <Users className="text-yellow-500" />
  },
  {
category: 'EXPERIENCE',
    title: 'Red Carpet Showcase',
    shortDesc: 'Walk the spotlight. Finalists experience a premiere-style entry with media coverage and audience interaction.',
    longDesc: 'Experience the magic of a real film premiere. Finalists and special guests will walk the red carpet, engage with student media outlets. This is where engineering prestige meets cinematic glamour.',
    details: [
      'Highlights: Professional photo-ops and press wall.',
      'Attendees: Filmmakers, Cast, Crew, and VIP Guests.',
      'Media: Coverage by SPEC Student Media & local news partners.',
      'Entry: Specialized entry badges provided to finalists.'
    ],
    icon: <Sparkles className="text-yellow-500" />
  },
  {
    category: 'EVENT',
    title: 'The Grand Finale Gala',
    shortDesc: 'The festival culminations. A day of recognition, red-carpet appearances, and the announcement of the 2026 winners.',
    longDesc: 'Experience the glitz and glamour of Nirvahana. The final day features performances, screening of the winning short films, and the prestigious awards ceremony attended by celebrity guests.',
    details: [
      'Dress Code:  Smart Casual / College Formal.',
      'Highlight: Screening of Selected Short Films.',
      'Finale: Closing Ceremony on Day 3 (Ends at 5:00 PM)',
      'Awards: Recognition for Outstanding Student Filmmakers.',
      'Participation: Students & Aspiring Creators.'
    ],
    icon: <Trophy className="text-yellow-500" />
  },
  {
    category: 'SCREENING',
    title: 'Festival Screenings',
    shortDesc: 'A curated selection of student-made films and professional indie shorts screened in theater-grade quality.',
    longDesc: 'Continuous screenings of shortlisted entries and guest films. Immerse yourself in a wide variety of genres including drama, sci-fi, and documentary across dedicated screens on campus.',
    details: [
      'Schedule: Published daily during the carnival.',
      'Q&A: Interactive sessions with the filmmakers post-screening.',
      'Entry: Included with the General Pass.'
    ],
    icon: <Film className="text-yellow-500" />
  }
];

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  return (
    <section id="events" className="py-20 md:py-32 bg-black px-4">
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 md:mb-6 block">CURATED PROGRAM</span>
        <h2 className="text-4xl md:text-9xl font-serif-cinematic font-black mb-6 md:mb-8 leading-none">The Lineup</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto font-light text-sm md:text-base px-4">A carefully crafted schedule of learning and competition designed for the modern storyteller.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {events.map((event, idx) => (
          <div 
            key={idx} 
            className="bg-zinc-900/40 border border-zinc-900 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group hover:bg-zinc-800/60 hover:border-yellow-500/30 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 flex flex-col h-full cursor-pointer"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:border-yellow-500/40 transition-all duration-500">
              {/* Fix: Explicitly cast to React.ReactElement<any> to allow the 'size' prop in cloneElement */}
              {React.cloneElement(event.icon as React.ReactElement<any>, { size: 24 })}
            </div>
            <span className="text-[9px] md:text-[10px] font-black tracking-widest text-yellow-600 mb-2 block group-hover:text-yellow-500 transition-colors uppercase">{event.category}</span>
            <h3 className="text-xl md:text-2xl font-serif-cinematic font-black mb-4 group-hover:text-white transition-colors">{event.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 md:mb-8 group-hover:text-zinc-300 transition-colors flex-grow">{event.shortDesc}</p>
            <button 
              className="text-[10px] font-black tracking-widest uppercase flex items-center text-zinc-400 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-x-2 w-fit"
            >
              LEARN MORE <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 relative max-h-[90vh] flex flex-col">
            <div className="p-6 md:p-12 overflow-y-auto">
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-all duration-300 hover:rotate-90"
              >
                <X size={28} />
              </button>

              <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-zinc-800">
                {selectedEvent.icon}
              </div>

              <span className="text-yellow-600 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-3 md:mb-4 block">
                {selectedEvent.category}
              </span>
              
              <h3 className="text-3xl md:text-5xl font-serif-cinematic font-black text-white mb-6 leading-tight">
                {selectedEvent.title}
              </h3>

              <div className="space-y-6 mb-8 md:mb-10 text-left">
                <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
                  {selectedEvent.longDesc}
                </p>

                <div className="bg-zinc-900/30 rounded-2xl p-5 md:p-6 border border-zinc-800/50">
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-yellow-500 uppercase mb-4">Key Details</h4>
                  <ul className="space-y-3">
                    {selectedEvent.details.map((detail, i) => (
                      <li key={i} className="text-zinc-500 text-xs md:text-sm flex items-start space-x-2 group">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span className="group-hover:text-zinc-300 transition-colors">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 sticky bottom-0 bg-zinc-950 pb-2">
                <a 
                  href={`mailto:nirvahana@stpetershyd.com?subject=Inquiry: ${selectedEvent.title}`}
                  className="w-full sm:w-auto bg-yellow-500 hover:bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 active:scale-95 text-center"
                >
                  Inquiry
                </a>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="w-full sm:w-auto border border-zinc-800 text-zinc-400 px-6 md:px-8 py-3 md:py-4 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 hover:bg-zinc-900 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;