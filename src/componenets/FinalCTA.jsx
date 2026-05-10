function FinalCTA({ id, formRef }) {
  const path = '/';

  const handleClick = () => {
    if (id === 'restaurants-final' || id === 'guests-final') {
      window.location.href = path;
    } else {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          AVIVO
        </span>
        <button
          onClick={handleClick}
          className="relative p-[2px] rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* The Gradient Border Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-full animate-pulse" />

          {/* The Inner Button Content */}
          <div className="relative px-5 py-2 bg-white rounded-full text-black text-md font-medium tracking-tight">
            I want in!
          </div>
        </button>
        <p className="text-xs text-gray-400">
          Get access before we launch in Vancouver.
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;
