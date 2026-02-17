
import React from 'react';
import { CountdownTime } from '../types';

const targetDate = new Date('March 23, 2026 00:00:00').getTime();

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState<CountdownTime | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex space-x-4 sm:space-x-6 md:space-x-12 justify-center">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HOURS" />
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl sm:text-5xl md:text-8xl font-serif-cinematic font-black text-yellow-500 mb-1 leading-none">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 font-black">{label}</span>
  </div>
);

export default Countdown;
