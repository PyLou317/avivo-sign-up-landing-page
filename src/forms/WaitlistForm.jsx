import { useState } from 'react';

const LOCATION_SUGGESTIONS = [
  'Vancouver',
  'Yaletown',
  'Kitsilano',
  'Mount Pleasant',
  'Burnaby',
  'Surrey',
  'Langley',
  'Richmond',
  'North Vancouver',
  'Coquitlam',
  'Abbotsford',
  'Chilliwack',
  'Whistler',
  'Kelowna',
  'Victoria',
  'Seattle',
  'Calgary',
  'Edmonton',
  'Toronto',
  'Montreal',
];

function WaitlistForm({ activeTab, setActiveTab, id = 'form' }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Location follow-up state
  const [locationInput, setLocationInput] = useState('');
  const [locationSaved, setLocationSaved] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  // Derived state for button disabled condition
  const trimmedEmail = email.trim();
  const isDisabled = trimmedEmail === '' || loading;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return; // guard against rapid re-submits
    const normalised = email.trim();
    if (!isValidEmail(normalised)) {
      setError('Please enter a valid email address.');
      return;
    }
    setEmail(normalised); // store trimmed value
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const filteredSuggestions = locationInput.trim()
    ? LOCATION_SUGGESTIONS.filter((loc) =>
        loc.toLowerCase().includes(locationInput.toLowerCase()),
      )
    : [];

  const handleLocationSelect = (loc) => {
    setLocationInput(loc);
    setShowSuggestions(false);
  };

  const handleLocationSave = () => {
    setLocationSaved(true);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-5">
      <div className="flex items-center bg-gray-100 rounded-full p-1 gap-1">
        {['Guest', 'Restaurant'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tab
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {submitted ? (
        <div className="w-full flex flex-col items-center gap-4">
          {/* Confirmation */}
          <div className="text-center">
            <p className="text-base font-medium text-black">You're in.</p>
            <p className="text-sm text-gray-500 mt-1">
              {activeTab === 'Guest'
                ? "We'll invite you in as we begin launching."
                : "We'll reach out as we begin onboarding restaurants."}
            </p>
          </div>

          {/* Optional location follow-up */}
          {!locationSaved ? (
            <div className="w-full flex flex-col gap-2 pt-1">
              <p className="text-xs text-gray-400 text-center tracking-wide">
                Where should AVIVO launch next?
              </p>
              <div className="relative w-full">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={locationInput}
                    onChange={(e) => {
                      setLocationInput(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 150)
                    }
                    onKeyDown={(e) => e.key === 'Enter' && handleLocationSave()}
                    placeholder="City or neighbourhood"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm outline-none transition-all duration-150 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 bg-white"
                  />
                  <button
                    type="button"
                    onClick={handleLocationSave}
                    className="px-5 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 active:scale-95 transition-all duration-150 whitespace-nowrap"
                  >
                    Send
                  </button>
                </div>

                {/* Suggestions dropdown */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <ul className="absolute z-10 top-full mt-1 left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                    {filteredSuggestions.slice(0, 6).map((loc) => (
                      <li
                        key={loc}
                        onMouseDown={() => handleLocationSelect(loc)}
                        className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors duration-100"
                      >
                        {loc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <p className="text-xs text-gray-400 text-center">
              Thanks — we'll keep you posted as AVIVO grows.
            </p>
          )}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full flex justify-center flex-col sm:flex-row gap-2"
          noValidate
        >
          <div className="relative group p-[2px] sm:w-full rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 animate-pulse">
            <input
              type="email"
              id={`email-${id}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder={
                activeTab === 'Guest'
                  ? 'your@email.com'
                  : 'restaurant@email.com'
              }
              className={`${
                error
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'w-full bg-white dark:bg-white rounded-full px-4 py-2 outline-none'
              } bg-white`}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full transition-all duration-150 whitespace-nowrap hover:bg-gray-800 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            {loading ? 'Joining…' : 'Join Waitlist'}
          </button>
        </form>
      )}

      {error && (
        <p className="text-xs text-red-500 -mt-2 self-start pl-4">{error}</p>
      )}
    </div>
  );
}

export default WaitlistForm;
