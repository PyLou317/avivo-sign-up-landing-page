export default function ActiveTabToggle({ activeTab, setActiveTab }) {
  return (
    <div className="relative flex bg-gray-100 p-1 rounded-full w-[180px] sm:w-[300px] sm:ms-auto">
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] transition-transform duration-300 ease-out ${
          activeTab === 'Restaurant' ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 bg-[#D4AF37]/60 blur-md rounded-full animate-pulse" />
        <div className="relative h-full w-full bg-black rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
      </div>

      {['Guest', 'Restaurant'].map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`relative z-10 flex-1 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-sm font-semibold transition-colors duration-300 text-center ${
            activeTab === tab
              ? 'text-white'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
