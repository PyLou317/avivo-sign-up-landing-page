export default function AreYouARestaurant({ activeTab }) {
  return (
    <div className={`flex items-center gap-2 justify-end select-none transition-transform duration-300 ${
      activeTab === 'Restaurant' ? 'translate-x-6' : 'me-4'
    }`}>
      {activeTab === 'Restaurant' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-scale-x-100 animate-bounce"
        >
          <path d="M12 21c-1.5-4-1-11 6-14" />
          <path d="M14 8l4-3 1 5" />
        </svg>
      )}

      <p className="font-handwriting text-2xl sm:text-3xl text-gray-500 tracking-wide mt-2">
        {activeTab === 'Guest' ? 'restaurant owner' : 'guest'}? click here
      </p>

      {activeTab === 'Guest' && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2.5"
          strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-bounce"
        >
          <path d="M12 21c-1.5-4-1-11 6-14" />
          <path d="M14 8l4-3 1 5" />
        </svg>
      )}
    </div>
  );
}