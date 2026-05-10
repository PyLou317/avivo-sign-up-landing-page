import { useRef, useState } from 'react';

import HomeHero from './pages/landing/HomeHero.jsx';
import HomeSupportingLine from './pages/landing/HomeSupportingLine.jsx';
import HomeSplitSection from './pages/landing/HomeSplitSection.jsx';
import HomeLocationStrip from './pages/landing/HomeLocationStrip.jsx';
import FinalCTA from './componenets/FinalCTA.jsx';
import Footer from './componenets/Footer.jsx';

function App({ activeTab, setActiveTab }) {
  const formRef = useRef(null);

  return (
    <main className="w-full font-sans antialiased">
      <HomeHero
        formRef={formRef}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HomeSupportingLine activeTab={activeTab}/>
      <HomeSplitSection activeTab={activeTab} />
      <HomeLocationStrip />
      <FinalCTA id="home-final" formRef={formRef} />
      <Footer />
    </main>
  );
}

export default App;
