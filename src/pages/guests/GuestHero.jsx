import { useState } from 'react';
import WaitlistForm from '../../forms/WaitlistForm';


function GuestsHero() {
  const [activeTab, setActiveTab] = useState('Guest');

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 pb-16 bg-white">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-light text-black leading-tight tracking-tight">
          Bring friends. <span className="block">Get rewarded for it.</span>
        </h1>
        <p className="mt-4 text-base text-gray-400 max-w-sm">
          Earn rewards when you bring friends to local restaurants.
        </p>
        <div className="mt-7 w-full">
          <WaitlistForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id="guests-hero"
          />
        </div>
        <p className="mt-5 text-xs text-gray-400 tracking-wide">
          Launching in Vancouver, BC Canada
        </p>
      </div>
    </section>
  );
}

export default GuestsHero;
