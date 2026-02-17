
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      alt: "Professional Cinematography",
      className: "lg:col-span-1 lg:row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
      alt: "Cinema Premiere",
      className: ""
    },
    {
      src: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80&w=800",
      alt: "Vintage Film Projector",
      className: ""
    },
    {
      src: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?auto=format&fit=crop&q=80&w=800",
      alt: "Movie Clapperboard",
      className: ""
    },
    {
      src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
      alt: "Classic Film Reels",
      className: ""
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-black px-4">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">ATMOSPHERE & VISION</span>
        <h2 className="text-5xl md:text-9xl font-serif-cinematic font-black mb-8 leading-none">Sneak Peek</h2>
        <p className="text-zinc-500 max-w-lg mx-auto text-sm font-light tracking-widest uppercase">Inside the Nirvahana Cinematic Experience</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className={`overflow-hidden rounded-[2rem] border border-zinc-800 group ${img.className} relative bg-zinc-900`}>
            <img 
              src={img.src} 
              className="w-full h-full min-h-[350px] object-cover transition-all duration-1000 cursor-pointer group-hover:scale-110 block" 
              alt={img.alt}
              loading="lazy"
            />
            {/* Minimal hover interaction to maintain full brightness as requested */}
            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
            
            {/* Label revealed on hover */}
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span className="bg-black/80 backdrop-blur-md text-yellow-500 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border border-yellow-500/20">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
