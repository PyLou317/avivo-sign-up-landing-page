export default function ActiveTabToggle({ activeTab, setActiveTab }) {
  return (
    <div className="relative flex bg-gray-100 p-1 rounded-full w-[180px] sm:w-[300px] sm:ms-auto">
      {/* The Sliding Container */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          activeTab === 'Restaurant' ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Glow Layer: Matches the gold highlight of your input border */}
        <div className="absolute inset-0 bg-[#D4AF37]/40 blur-lg rounded-full animate-pulse" />
        
        {/* The Pill: Uses the Navy Blue from your input gradient instead of pure black */}
        <div className="relative h-full w-full bg-black rounded-full overflow-hidden border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          {/* Internal Shimmer: This mimics the "clockwise" light movement of the input */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
        </div>
      </div>

      {['Guest', 'Restaurant'].map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`relative z-10 flex-1 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-bold tracking-wide transition-colors duration-300 text-center ${
            activeTab === tab
              ? 'text-white'
              : 'text-gray-400 hover:text-black'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}