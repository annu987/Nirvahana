
import React from 'react';

const timeline = [
  {
    day: "23RD",
    title: 'PODCAST',
    desc: 'Deep-dive discussions into the art of filmmaking and storytelling.'
  },
  {
    day: "24TH",
    title: 'CARNIVAL + MOVIE NIGHT',
    desc: 'A vibrant celebration followed by an immersive cinematic screening.'
  },
  {
    day: "25TH",
    title: 'FILM CARNIVAL',
    desc: 'The grand finale: Awards, screenings, and the ultimate celebration.'
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-black border-y border-zinc-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">EVENT SCHEDULE</span>
          <h2 className="text-5xl md:text-9xl font-serif-cinematic font-black mb-4 uppercase tracking-tighter">MARCH 23-25</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {timeline.map((item, index) => (
            <div key={index} className="relative group p-10 md:p-16 border-b md:border-b-0 md:border-r last:border-0 border-zinc-900 hover:bg-zinc-950 transition-colors duration-500">
              <span className="text-yellow-500/20 group-hover:text-yellow-500/40 text-8xl md:text-[10rem] font-serif-cinematic font-black absolute top-0 left-1/2 -translate-x-1/2 select-none transition-colors duration-700">
                0{index + 1}
              </span>
              
              <div className="relative z-10 text-center">
                <p className="text-yellow-500 text-xs font-black tracking-[0.3em] mb-4">DAY-0{index + 1} • {item.day} MARCH</p>
                <h3 className="text-2xl md:text-3xl font-serif-cinematic font-black text-white mb-6 tracking-tight group-hover:scale-105 transition-transform duration-500">{item.title}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-[240px] mx-auto group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
