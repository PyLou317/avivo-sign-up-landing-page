import { NavLink } from 'react-router';
import RestaurantsLearnMore from '../restaurants/RestaurantsLearnMore';
import GuestsLearnMore from '../guests/GuestLearnMore';

function HomeSplitSection({ activeTab }) {
  //   const paths = [
  //     {
  //       title: 'Guests',
  //       description:
  //         'Bring your friends to restaurants you love — and get rewarded.',
  //       cta: 'Learn more',
  //     },
  //     {
  //       title: 'Restaurants',
  //       description: 'Turn your regulars into a verified source of new guests.',
  //       cta: 'Learn more',
  //     },
  //   ];

  return (
    <section className="w-full px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase text-center mb-5">
          How It Works
        </p>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {paths.map((path) => (
            <div
              key={path.title}
              className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 flex flex-col gap-4 hover:shadow-sm transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-black">{path.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {path.description}
              </p>
              <NavLink to={`/${path.title.toLowerCase()}`}>
                <button
                  type="button"
                  className="self-start text-sm font-medium text-black underline underline-offset-4 hover:text-gray-500 transition-colors duration-150"
                >
                  {path.cta}
                </button>
              </NavLink>
            </div>
          ))}
        </div> */}

        {activeTab === 'Guest' && <GuestsLearnMore />}
        {activeTab === 'Restaurant' && <RestaurantsLearnMore />}
      </div>
    </section>
  );
}

export default HomeSplitSection;
