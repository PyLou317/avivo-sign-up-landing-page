import GuestsHero from '../guests/GuestHero.jsx';
import GuestsHowItWorks from '../guests/GuestHowItWorks.jsx';
import GuestsWhyItMatters from '../guests/GuestWhyItMatters.jsx';
import FinalCTA from '../../componenets/FinalCTA.jsx';
import Footer from '../../componenets/Footer.jsx';

function GuestsLearnMore() {
  return (
    <main className="w-full font-sans antialiased mt-15">
      <GuestsHero />
      <GuestsHowItWorks />
      <GuestsWhyItMatters />
      <FinalCTA id="guests-final" />
      <Footer />
    </main>
  );
}

export default GuestsLearnMore;