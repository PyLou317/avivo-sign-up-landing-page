import { useState } from 'react';
import WaitlistForm from '../../forms/WaitlistForm';

function RestaurantsHero() {
  const [activeTab, setActiveTab] = useState('Restaurant');

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-white">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          AVIVO
        </span>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-light text-black leading-tight tracking-tight">
          Grow through the guests{' '}
          <span className="block">who already love you.</span>
        </h1>
        <p className="mt-4 text-base text-gray-400 max-w-sm">
          Turn your regulars into a verified source of new guests.
        </p>
        <div className="mt-7 w-full">
          <WaitlistForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id="restaurants-hero"
          />
        </div>
        <p className="mt-5 text-xs text-gray-400 tracking-wide">
          Launching in Vancouver, BC Canada
        </p>
      </div>
    </section>
  );
}

export default RestaurantsHero;
