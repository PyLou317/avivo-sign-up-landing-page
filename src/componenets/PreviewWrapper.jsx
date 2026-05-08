const PAGES = ['Homepage', 'Guests', 'Restaurants'];

export default function AvivoPreview() {
  const [activePage, setActivePage] = useState('Homepage');

  return (
    <div>
      {/* Preview Toggle Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3 bg-white border-b border-gray-100">
        <div className="flex items-center bg-gray-100 rounded-full p-1 gap-1">
          {PAGES.map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setActivePage(page)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activePage === page
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Page content offset for fixed bar */}
      <div className="pt-14">
        {activePage === 'Homepage' && <AvivoHomepage />}
        {activePage === 'Guests' && <GuestsLearnMore />}
        {activePage === 'Restaurants' && <RestaurantsLearnMore />}
      </div>
    </div>
  );
}
