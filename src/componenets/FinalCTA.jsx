function FinalCTA({ id, formRef }) {
  const path = '/';

  const handleClick = () => {
    if (id === 'restaurants-final' || id === 'guests-final') {
      window.location.href = path;
    } else {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          AVIVO
        </span>

        {/* The Rotating Wrapper */}
        <button
          onClick={handleClick}
          className="relative p-[2px] overflow-hidden rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
        >
          {/* The Spinning Conic Gradient Layer */}
          <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#1E3A8A_0deg,#3B82F6_120deg,#D4AF37_240deg,#1E3A8A_360deg)]" />

          {/* The Inner Button Content */}
          <div className="relative px-8 py-3 bg-white rounded-full text-black text-md font-semibold tracking-tight transition-colors group-hover:bg-gray-50">
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
