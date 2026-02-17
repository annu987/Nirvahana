
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-yellow-500 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <StatItem value="3000+" label="EXPECTED VISITORS" />
        <StatItem value="10" label="FESTIVAL EVENTS" />
        <StatItem value="200+" label="TARGET SUBMISSIONS" />
        <StatItem value="3" label="GRAND DAYS" />
      </div>
    </section>
  );
};

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-5xl md:text-7xl font-serif-cinematic font-black text-black mb-2 leading-none">{value}</div>
    <div className="text-[10px] font-black tracking-[0.2em] text-black/60 uppercase">{label}</div>
  </div>
);

export default Stats;
