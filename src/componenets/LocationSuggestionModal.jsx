export default function LocationSuggestionModal({
  query,
  cityResults,
  handleSearch,
  handleLocationSelect,
  handleLocationSubmit,
  showSuggestions,
  setShowSuggestions,
}) {
  return (
    <div>
      <div className="my-10">
        <p className="text-3xl font-medium text-black">You're in!</p>
      </div>
      <div className="w-full flex flex-col gap-2 pt-1">
        <p className="text-xs text-gray-500 text-center tracking-wide">
          Let us know, where should AVIVO launch next?
        </p>
        <div className="relative w-full">
          <div className="flex gap-2">
            <input
              id="location"
              name="location"
              type="text"
              value={query}
              onChange={handleSearch}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              onKeyDown={(e) => e.key === 'Enter' && handleLocationSubmit()}
              placeholder="City or neighbourhood"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm outline-none transition-all duration-150 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 bg-white"
            />
            <button
              type="button"
              onClick={handleLocationSubmit}
              className="px-5 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 active:scale-95 transition-all duration-150 whitespace-nowrap"
            >
              Send
            </button>
          </div>

          {/* Suggestions dropdown */}
          {showSuggestions && cityResults && cityResults.length > 0 && (
            <ul className="absolute z-10 top-full mt-1 max-h-50 overflow-y-auto left-0 right-0 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              {cityResults.map((res, index) => (
                <li
                  key={index}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleLocationSelect(res);
                  }}
                  className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors duration-100"
                >
                  {res.name}
                  {res.province && `, ${res.province}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
