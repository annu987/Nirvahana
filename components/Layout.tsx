import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Menu, X, ArrowUp } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.split('#')[1];
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'HOME', path: '/#home', isHash: true },
    { name: 'ABOUT', path: '/#about', isHash: true },
    { name: 'EVENTS', path: '/#events', isHash: true },
    { name: 'GALLERY', path: '/#gallery', isHash: true },
    { name: 'SPONSORS', path: '/sponsorship', isHash: false },
    { name: 'REGISTER', path: '/#register', isHash: true },
    { name: 'CONTACT', path: '/#contact', isHash: true },
    { name: 'REGISTER AS VENDOR', path: '/vendor', isHash: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-yellow-500/30 selection:text-yellow-200 overflow-x-hidden">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled || isMenuOpen ? 'bg-black/95 border-b border-zinc-900 py-3 md:py-4' : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
              <span className="font-serif-cinematic text-xl md:text-2xl font-black tracking-tight text-white">
                <span className="text-yellow-500 transition-colors group-hover:text-white">Nirvahana</span> 
                <span className="ml-2 font-light tracking-widest text-zinc-100 hidden sm:inline-block group-hover:text-yellow-500 transition-colors uppercase text-xs md:text-sm">Film Carnival</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.isHash ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-[10px] font-black tracking-[0.25em] text-zinc-400 hover:text-yellow-500 transition-all duration-300 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[10px] font-black tracking-[0.25em] text-zinc-400 hover:text-yellow-500 transition-all duration-300 relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 transition-transform active:scale-90 hover:text-yellow-500 z-50"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div 
          className={`lg:hidden fixed inset-0 bg-black backdrop-blur-xl transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-6 text-center pt-10">
            {navLinks.map((link, idx) => (
              link.isHash ? (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`text-3xl font-serif-cinematic font-black tracking-widest text-white hover:text-yellow-500 transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-serif-cinematic font-black tracking-widest text-white hover:text-yellow-500 transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[40] w-12 h-12 md:w-14 md:h-14 bg-yellow-500 text-black rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl transform ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
        } hover:bg-white hover:scale-110 active:scale-90`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <footer className="bg-zinc-950 pt-20 pb-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          <div className="lg:col-span-1">
            <h3 className="font-serif-cinematic text-xl md:text-2xl font-black mb-6 uppercase">
              NIRVAHANA <span className="text-yellow-500">CARNIVAL</span>
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light italic">
              "A Home for Storytellers." The premiere film festival of St. Peter's Engineering College.
            </p>
            <div className="flex space-x-5">
              <a 
                href="https://www.instagram.com/nirvahana.spec/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-zinc-100 uppercase mb-6 opacity-50">CONNECT</h4>
            <ul className="space-y-3 text-sm text-zinc-500 font-light">
              <li><a href="mailto:nirvahana@stpetershyd.com" className="hover:text-white transition-all duration-300 break-all block">nirvahana@stpetershyd.com</a></li>
              <li><a href="tel:+918539995558" className="hover:text-white transition-all duration-300 block">+91 63045 93815</a></li>
              <li><a href="tel:+916304593815" className="hover:text-white transition-all duration-300 block">+91 89775 02006</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-zinc-100 uppercase mb-6 opacity-50">LOCATION</h4>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Maisammaguda, Dullapally, <br /> Hyderabad, Telangana 500100
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-zinc-100 uppercase mb-6 opacity-50">PARTICIPATE</h4>
            <ul className="space-y-3 text-sm text-zinc-500 font-light">
              <li><a href="https://unstop.com/o/4rB5TCH?lb=kxontOSf&utm_medium=Share&utm_source=events&utm_campaign=Specnir47198" className="hover:text-yellow-500 transition-all duration-300 block">Register Film</a></li>
              <li><Link to="/sponsorship" className="hover:text-yellow-500 transition-all duration-300 block">Sponsor Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase text-center md:text-left">
          <p>© 2026 NIRVAHANA FILM CLUB. ST PETER'S ENGINEERING COLLEGE.</p>
          <p className="mt-4 md:mt-0 font-serif-cinematic">MARCH 23-25, 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
