import { useState } from 'react';
import WaitlistForm from '../../forms/WaitlistForm';

function HomeHero({ formRef }) {
  const [activeTab, setActiveTab] = useState('Guest');

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-white">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          AVIVO
        </span>
        <h1 className="flex flex-col mt-5 text-4xl sm:text-5xl md:text-6xl font-extralight text-gray-600 leading-tight tracking-tight">
          <span>
            bring <span className="font-medium text-black">friends.</span>
          </span>
          <span>
            <span className="block sm:inline">
              eat <span className="font-medium text-black">local.</span>
            </span>
          </span>
          <span>
            <span className="block">
              earn <span className="font-medium text-black">rewards.</span>
            </span>
          </span>
        </h1>
        <p className="mt-4 text-base text-gray-400 max-w-sm">
          Earn rewards when you bring friends to local restaurants.
        </p>
        <div ref={formRef} className="mt-7 w-full">
          <WaitlistForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            id="home-hero"
          />
        </div>
        <p className="mt-5 text-xs text-gray-400 tracking-wide">
          Launching in Vancouver, BC Canada
        </p>
      </div>
    </section>
  );
}

export default HomeHero;
