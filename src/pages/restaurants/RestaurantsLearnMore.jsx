import RestaurantsHero from '../restaurants/RestaurantsHero.jsx';
import RestaurantsProblemInsight from '../restaurants/RestaurantsProblemInsight.jsx';
import RestaurantsHowItWorks from '../restaurants/RestaurantsHowItWorks.jsx';
import RestaurantsWhyItMatters from '../restaurants/RestaurantsWhyItMatters.jsx';
import FinalCTA from '../../componenets/FinalCTA.jsx';
import Footer from '../../componenets/Footer.jsx';

function RestaurantsLearnMore() {
  return (
    <main className="w-full font-sans antialiased mt-15">
      <RestaurantsHowItWorks />
      <RestaurantsWhyItMatters />
    </main>
  );
}

export default RestaurantsLearnMore;