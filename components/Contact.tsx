
import React from 'react';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <span className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">GET IN TOUCH</span>
            <h2 className="text-5xl md:text-7xl font-serif-cinematic font-black mb-10 text-white uppercase leading-[0.9] tracking-tighter">
              Ready to <br /> <span className="text-yellow-500">Connect?</span>
            </h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-md">
              Whether you are a filmmaker, a potential sponsor, or a student enthusiast, our team is here to guide you. Reach out through any of our official channels.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="space-y-10">
              <ContactBlock 
                icon={<Phone size={20} className="text-yellow-500" />}
                label="Registrations"
                value="+91 63045 93815"
                href="tel:+916304593815"
              />
               <ContactBlock 
                icon={<Phone size={20} className="text-yellow-500" />}
                label="Support"
                value="+91 89775 02006"
                href="tel:+918977502006"
              />
              <ContactBlock 
                icon={<Phone size={20} className="text-yellow-500" />}
                label="Helpline"
                value="+91 92467 10026"
                href="tel:+919246710026"
              />
            </div>
            <div className="space-y-10">
              <ContactBlock 
                icon={<Mail size={20} className="text-yellow-500" />}
                label="Official Email"
                value="nirvahana@stpetershyd.com"
                href="mailto:nirvahana@stpetershyd.com"
              />
              <ContactBlock 
                icon={<Instagram size={20} className="text-yellow-500" />}
                label="Social Media"
                value="@nirvahana.spec"
                href="https://www.instagram.com/nirvahana.spec/"
              />
              <ContactBlock 
                icon={<MapPin size={20} className="text-yellow-500" />}
                label="Venue"
                value="SPEC Campus, Hyderabad"
                href="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactBlock: React.FC<{ icon: React.ReactNode; label: string; value: string; href: string }> = ({ icon, label, value, href }) => (
  <a href={href} className="group block">
    <div className="flex items-center space-x-4 mb-2">
      <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-yellow-500/50 transition-colors">
        {icon}
      </div>
      <span className="text-[10px] font-black tracking-widest text-zinc-600 uppercase group-hover:text-yellow-500 transition-colors">{label}</span>
    </div>
    <p className="text-zinc-300 text-lg font-light tracking-wide group-hover:text-white transition-colors pl-12">{value}</p>
  </a>
);

export default Contact;
