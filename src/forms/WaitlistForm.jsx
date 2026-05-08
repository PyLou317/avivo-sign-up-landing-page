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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LocationSuggestionModal
          query={query}
          cityResults={cityResults}
          handleSearch={handleSearch}
          handleLocationSelect={handleLocationSelect}
          handleLocationSubmit={handleLocationSubmit}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      </Modal>
    </>
  );
}

export default WaitlistForm;
