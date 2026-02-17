
import React from 'react';
import Hero from '../components/Hero';
import Atmosphere from '../components/Atmosphere';
import AboutSection from '../components/AboutSection';
import Stats from '../components/Stats';
import Events from '../components/Events';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import Sponsors from '../components/Sponsors';
import Registration from '../components/Registration';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Atmosphere />
      <AboutSection />
      <Stats />
      <Events />
      <Timeline />
      <Gallery />
      <div id="sponsors">
        <Sponsors />
      </div>
      <Registration />
      <Contact />
    </div>
  );
};

export default HomePage;
